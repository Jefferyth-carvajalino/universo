function getPackages() {
	const params = new URLSearchParams();
	params.append("req", "getAll");

	return axios({
		method: "post",
		url: "/controller/products-controller.php",
		data: params,
	}).then((response) => {
		return response.data;
	});
}

function buyPackage(event, element) {
	event.preventDefault();

	total = $(element).attr("data-package-cost");
	packageSelected = $(element).attr("data-package-id");
	console.log("Paquete: " + packageSelected);
	$(".pay-modal").addClass("active");
	$("#sps-package-name").text("Paquete de $" + total);
}

function confirmPurchase(orderId, total, status, paymentMethod, package) {
	console.log('Guardando en base de datos');
	$.ajax({
		url: "/controller/purchase-controller.php",
		data: {
			req: "create",
			referenceCode: orderId,
			total: total,
			paymentMethod: paymentMethod,
			payStatus: status,
			customerId: user.id,
			productId: package,
		},
		method: "POST",
		dataType: "JSON",
		cache: false,
	})
		.done(async function (sRes) {
			console.log(JSON.stringify(sRes));

			if (sRes["res"] == "ok") {
				user.total_amount_purchases =
					total + parseFloat(user.total_amount_purchases);
				$(".loader-wrapper").removeClass("active");
				const message = sRes;
				const { title, description } = message.msg;
				await Swal.fire({
					title: title,
					text: description,
					icon: "success",
					confirmButtonText: "Continuar",
				});

				window.location.href = "/dashboard-consultor/mis-compras/";
			} else {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: sRes["msg"],
				});
			}
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			if (jqXHR.status === 0) {
				console.log("Not connect: Verify Network.");
			} else if (jqXHR.status == 404) {
				console.log("Requested page not found [404]");
			} else if (jqXHR.status == 500) {
				console.log("Internal Server Error [500].");
			} else if (textStatus === "parsererror") {
				console.log("Requested JSON parse failed.");
			} else if (textStatus === "timeout") {
				console.log("Time out error.");
			} else if (textStatus === "abort") {
				console.log("Ajax request aborted.");
			} else {
				console.log("Uncaught Error: " + jqXHR.responseText);
			}
		});
}

function getWompiData(event, element) {
	total = $(element).attr("data-package-cost")
	let totalPackage = $(element).attr("data-package-cost")
	packageSelected = $(element).attr("data-package-id");

	let currentDate = new Date().getTime();
	const amountInCents = total * 500000;
	const reference = `${totalPackage}-${currentDate}-${packageSelected}`;
	console.log("@reference: ", reference);
	const wompiConfig = { ...WOMPI_DEFAULT_SETTINGS, amountInCents, reference };

	const checkout = new WidgetCheckout(wompiConfig);

	checkout.open(({ transaction }) => {
		console.log("@transaction: ", transaction);
		const { status, statusMessage } = transaction;
		console.log("@status: ", status);

		if (status === "APPROVED") {
			confirmPurchase(reference, total, status, "Wompi", packageSelected);
		}

		if (status === "PENDING") {
			confirmPurchase(reference, 0, status, "Wompi", packageSelected);
		}

		if (status === "DECLINED" || status === "DECLINED" || status === "ERROR") {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: statusMessage,
			});
		}

	});
}

function fetchTransactionStatus(transactionId, environment) {
	let url = '';

	if (environment === "test") {
		url = `https://sandbox.wompi.co/v1/transactions/${transactionId}`;
	} else {
		url = `https://production.wompi.co/v1/transactions/${transactionId}`;
	}

	fetch(url)
		.then(respuesta => respuesta.json())
		.then(({ data, meta }) => {
			const { reference, amount_in_cents, payment_method_type, status } = data;

			$.ajax({
				url: "/controller/customer-controller.php",
				data: {
					req: "getPurchaseByReference",
					referenceId: reference,
				},
				method: "POST",
				dataType: "JSON",
				cache: false,
			})
				.done(async function (response) {
					console.log(response.length);
					if (response.length > 0) {
						await Swal.fire({
							icon: "error",
							title: "Oops...",
							text: "Ya se encuentra registrado un pago",
							confirmButtonText: "Confirmar",
						});

						window.location.href = "/dashboard-consultor/paquetes/";
					} else {
						console.log("data", data);
						if (payment_method_type === 'PSE' || payment_method_type === 'BANCOLOMBIA_TRANSFER') {
							if (status === 'APPROVED') {
								const total = parseInt(String(amount_in_cents).slice(0, String(amount_in_cents).length - 2), 10);
								const packageSelected = parseInt(reference.slice(-1), 10);
								const totalAmount = parseInt(reference.slice(0, -1), 10);
								console.log(totalAmount);
								confirmPurchase(reference, totalAmount, status, "Wompi", packageSelected);
							} else {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Error al procesar el pago",
								});

								setTimeout(() => {
									window.location.href = "/dashboard-consultor/paquetes/";
								}, 2000);
							}
						}
					}
				})
				.fail(function (jqXHR, textStatus, errorThrown) {
					if (jqXHR.status === 0) {
						console.log("Not connect: Verify Network.");
					} else if (jqXHR.status == 404) {
						console.log("Requested page not found [404]");
					} else if (jqXHR.status == 500) {
						console.log("Internal Server Error [500].");
					} else if (textStatus === "parsererror") {
						console.log("Requested JSON parse failed.");
					} else if (textStatus === "timeout") {
						console.log("Time out error.");
					} else if (textStatus === "abort") {
						console.log("Ajax request aborted.");
					} else {
						console.log("Uncaught Error: " + jqXHR.responseText);
					}
				});

		})
		.catch(error => {
			console.error(error.responseText());
		});
}

function validateWompiPSEPurchase() {
	const wompiTransactionId = getUrlSearch("id");
	const wompiTransactionEnvironment = getUrlSearch("env");

	if (wompiTransactionId && wompiTransactionEnvironment) {
		fetchTransactionStatus(wompiTransactionId, wompiTransactionEnvironment);
	}
}

paypal
	.Buttons({
		createOrder: function (data, actions) {
			// $('.loader-wrapper').addClass("active");
			// This function sets up the details of the transaction, including the amount and line item details.
			return actions.order.create({
				purchase_units: [
					{
						amount: {
							value: total,
						},
					},
				],
			});
		},
		onApprove: function (data, actions) {
			// This function captures the funds from the transaction.
			return actions.order
				.capture()
				.then(function (details) {
					// This function shows a transaction success message to your buyer.
					console.log("details: " + JSON.stringify(details));
					console.log("orderId/reference: " + details.id);
					console.log("status: " + details.status);
					$(".loader-wrapper").addClass("active");

					confirmPurchase(details.id, total, details.status, "PayPal", packageSelected);
					// alert('Transaction completed by ' + details.payer.name.given_name);
				})
				.catch(function (err) {
					$(".pay-modal").removeClass("active");
					console.error("onApprove Error: " + err);
				});
		},
		onError: function (err) {
			console.error(err);
			$(".pay-modal").removeClass("active");
		},
		onCancel: function (data) {
			console.error(data);
			$(".pay-modal").removeClass("active");
		},
	})
	.render("#paypal-btns-container");

$(".btn-close-modal").click(function (e) {
	e.preventDefault();
	$(".pay-modal").removeClass("active");
});

getPackages()
	.then((sRes) => {
		sRes["msg"].forEach((package) => {
			$("#mc-paquetes-box")
				.append(`<span>
					<img src="${package.image}" alt="img paquetes">
					<a style="right: auto !important; bottom: 20px !important;" href="#" class="btn-comprar-w" data-package-id="${package.id}" onclick="getWompiData(event, this); return gtag_report_conversion('')" data-package-id="${package.product_pk}" data-package-cost="${package.cost}"><svg style="width:18px;height:18px" viewBox="0 0 24 24"><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>comprar</a>
				</span>`);
			// .append(`<span>
			// 	<img src="${package.image}" alt="img paquetes">
			// 	<a href="#" class="btn-comprar-p" data-package-id="${package.id}" onclick="buyPackage(event, this); return gtag_report_conversion('')" data-package-id="${package.product_pk}" data-package-cost="${package.cost}"><svg style="width:18px;height:18px" viewBox="0 0 24 24"><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>PayPal</a>
			// 	<a href="#" class="btn-comprar-w" data-package-id="${package.id}" onclick="getWompiData(event, this); return gtag_report_conversion('')" data-package-id="${package.product_pk}" data-package-cost="${package.cost}"><svg style="width:18px;height:18px" viewBox="0 0 24 24"><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>comprar</a>
			// </span>`);
		});
	})
	.catch((error) => {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: error,
		});
	});

$(".actual-balance-container span").text(
	`$${parseFloat(user.total_amount_purchases)}`
);

customFormFunc();
validateWompiPSEPurchase();
const today = new Date();
const actualyyyy = today.getFullYear();
let paquetesCarousel = $("#paquetes-carousel");
let paymentMethod = null;
let total = 0;
let packageSelected = null;
let priceCOP = 0;
const CURRENCY = 'COP';
const PUBLIC_KEY = 'pub_prod_jpkGaAyDQ6gRGFHD1GnuSNq3zk1QBM9L';
// const PUBLIC_KEY = 'pub_test_TDXO88RvU73yE3da94GqlECg57UBE5eX';
// const REDIRECT_URL = 'http://localhost:8082/dashboard-consultor/paquetes/';
const REDIRECT_URL = 'https://universopsiquico.com/dashboard-consultor/paquetes/';

const WOMPI_DEFAULT_SETTINGS = {
	currency: CURRENCY,
	publicKey: PUBLIC_KEY,
	redirectUrl: REDIRECT_URL
};
