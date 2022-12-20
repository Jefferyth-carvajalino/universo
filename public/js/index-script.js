
const UNIVERSO_COST = 0.6;

function generateAdvisersCards(universoCost, advisers = []) {
	return advisers.map(({ adviser_id, image_profile_url, nickname, average, readings, price, online, years_working }) => {
		const starsHtml = generateStarsHtml(parseInt(average));
		let adviserCost = universoCost + parseFloat(price);

		let adviserState = "";
		let adviserStateClass = "";

		if (parseInt(online) === 0) {
			adviserState = "Desconectado";
			adviserStateClass = "desconectado";

		} else if (parseInt(online) === 1) {
			adviserState = "Conectado";
			adviserStateClass = "conectado";

		} else if (parseInt(online) === 2) {
			adviserState = "Ocupado";
			adviserStateClass = "ocupado";
		}

		return `<a href="/descripcion-especialista/?id=${adviser_id}" class="asesor-card">
				<div class="ac-body">
					<img src="${image_profile_url}" alt="">
					<h6>${nickname}</h6>
					<div class="ac-score-container">
						<div class="acs-container">
							<div class="acs-n-container">
								<span>${average}</span>
							</div>
							<div class="acs-i-container">
								${starsHtml}
							</div>
						</div>
					</div>
					<p class="readings-and-price">
						<span>
							<b class="readings">${readings}</b>
							lecturas
						</span>
						<span>|</span>
						<span><b class="price-per-minute">$${adviserCost}</b> USD/min</span>
					</p>
					<p id="adviser-state" class="${adviserStateClass}">${adviserState}</p>
				</div>
				<div class="ac-footer">
					<p>Asesor desde ${years_working}</p>
				</div>
			</a>`;
	});
}

function renderCards(advisers) {
	$('#advisers-box').html("");

	$('.paginator-container').pagination({
		dataSource: advisers,
		pageSize: 8,
		className: 'paginationjs-theme-blue',
		callback: function (data, pagination) {
			const html = generateAdvisersCards(UNIVERSO_COST, data);
			const adviserBox = $('#advisers-box');
			adviserBox.html(html);
		}
	});
}

async function filterAdvisers(searchWord) {
	const advisers = await getAdvisers();
	console.log('Advisers: ', advisers);
	let searchedAdvisers = advisers.filter(function ({ nickname }) {
		return nickname.toLowerCase().indexOf(searchWord.toLowerCase()) > -1;
	});

	renderCards(searchedAdvisers);
}

function adviserInFirstPosition(arrayToModify, adviserToChangeId) {
	let advisers = [...arrayToModify];
	const adviserToChange = advisers.find(({ adviser_id }) => adviser_id === adviserToChangeId);

	if (adviserToChange) {
		const adviserToRemoveIndex = advisers.findIndex(({ adviser_id }) => adviser_id === adviserToChangeId);
		advisers.splice(adviserToRemoveIndex, 1);
		advisers.unshift(adviserToChange);
	}

	return advisers;
}

async function loadAdvisersCards() {
	try {
		const ESMERALDA_ID = "19";

		const advisers = await getAdvisers();
		advisers.sort(() => (Math.round(Math.random()) - 0.5));

		const advisersFixed = adviserInFirstPosition(advisers, ESMERALDA_ID);

		renderCards(advisersFixed);

	} catch (error) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: error
		});
	}
}

(function () {
	loadAdvisersCards();
})();

$('#search-adviser-input').keyup(function () { $('#search-adviser-form').submit(); });

$('#search-adviser-form').submit(function (e) {
	e.preventDefault();
	const searchWord = $('#search-adviser-input').val();
	if (searchWord !== "" && searchWord !== " ") {
		filterAdvisers(searchWord);
	} else {
		loadAdvisersCards();
	}
});

// export {
// 	getAdvisers,
// 	generateAdvisersCards,
// }

function getAdvisers() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "https://devdash.universopsiquico.com/api/getAdvicers",
			method: "GET",
			dataType: "JSON",
			cache: false
		}).done(function ({data}) {
			console.log("sresponse", data);
				resolve(data);
			// if (sResponse['res'] == "ok") {
			// 	console.log("sresponse", data);

			// } else {
			// 	reject(data);
			// }

		}).fail(function (jqXHR, textStatus, errorThrown) {

			if (jqXHR.status === 0) {
				console.log('Not connect: Verify Network.');

			} else if (jqXHR.status == 404) {
				console.log('Requested page not found [404]');

			} else if (jqXHR.status == 500) {
				console.log('Internal Server Error [500].');

			} else if (textStatus === 'parsererror') {
				console.log('Requested JSON parse failed.');

			} else if (textStatus === 'timeout') {
				console.log('Time out error.');

			} else if (textStatus === 'abort') {
				console.log('Ajax request aborted.');

			} else {
				console.log('Uncaught Error: ' + jqXHR.responseText);

			}

		});
	});
}

// if ($(window).width() <= 920) {
// 	$("#principal-popup").html(`
// 		<a href="/log-in/">
// 			<img src="/src/img/index/minutos-responsive.png" alt="" srcset="">
// 		</a>
// 	`)
// } else {
// 	$("#principal-popup").html(`
// 		<a href="/log-in/">
// 			<img src="/src/img/index/minutos-dektop.png" alt="" srcset="">
// 		</a>
// 	`)
// }
// if ($(window).width() <= 920) {
// 	$("#principal-popup").html(`
// 		<a href="/log-in/">
// 			<img src="/src/img/index/pasos-responsive.png" alt="" srcset="">
// 		</a>

// 		<a href="/log-in/">
// 			<img src="/src/img/index/minutos-responsive.png" alt="" srcset="">
// 		</a>
// 	`)
// } else {
// 	$("#principal-popup").html(`
// 		<a href="/log-in/">
// 			<img src="/src/img/index/pop-up.jpg" alt="" srcset="">
// 		</a>

// 		<a href="/log-in/">
// 			<img src="/src/img/index/minutos-dektop.png" alt="" srcset="">
// 		</a>
// 	`)
// }

function getPackages() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/products-controller.php",
			data: {
				req: "getAll",
			},
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sRes) {
			if (sRes['res'] == "ok") {
				resolve(sRes['msg']);

			} else {
				reject(sRes['msg']);
			}

		}).fail(function (jqXHR, textStatus, errorThrown) {

			if (jqXHR.status === 0) {
				console.log('Not connect: Verify Network.');

			} else if (jqXHR.status == 404) {
				console.log('Requested page not found [404]');

			} else if (jqXHR.status == 500) {
				console.log('Internal Server Error [500].');

			} else if (textStatus === 'parsererror') {
				console.log('Requested JSON parse failed.');

			} else if (textStatus === 'timeout') {
				console.log('Time out error.');

			} else if (textStatus === 'abort') {
				console.log('Ajax request aborted.');

			} else {
				console.log('Uncaught Error: ' + jqXHR.responseText);

			}

		});
	});
}

function generatePackageCards(packages) {
	// return packages.map(package => `<div class="enu-card" data-package-id="${package.id}"><div class="enu-c-back"><h5>${package.name}</h5></div><div class="enu-c-front"><div class="nec-icon"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve" width="150px"height="150px"><style type="text/css">.st0 {fill: #606060;}</style><g><path class="st0" d="M266.7,116.3h-15.6v-15.6c0-1.8-1.4-3.2-3.2-3.2c0,0,0,0,0,0h-15.6V81.8c0-1.8-1.4-3.2-3.2-3.2c0,0,0,0,0,0H38c-1.8,0-3.2,1.4-3.2,3.2c0,0,0,0,0,0v106.3c0,1.8,1.4,3.2,3.2,3.2h15.6V207c0,1.8,1.4,3.2,3.2,3.2c0,0,0,0,0,0h15.6v15.6c0,1.8,1.4,3.2,3.2,3.2c0,0,0,0,0,0h191c1.8,0,3.2-1.4,3.2-3.2V119.5C269.9,117.7,268.5,116.3,266.7,116.3z M41.2,85.1h184.6v99.9H41.2V85.1z M60.1,191.4H229c1.8,0,3.2-1.4,3.2-3.2v-84.3h12.4v99.9H60.1V191.4z M263.5,222.6H78.9v-12.4h169c1.8,0,3.2-1.4,3.2-3.2c0,0,0,0,0,0v-84.3h12.4V222.6z" /><path class="st0" d="M65.8,173.5c0,1.8,1.4,3.2,3.2,3.2c0,0,0,0,0,0h129c1.8,0,3.2-1.4,3.2-3.2c0,0,0,0,0,0c0-7.2,5.9-13.1,13.1-13.1c1.8,0,3.2-1.4,3.2-3.2c0,0,0,0,0,0v-44.4c0-1.8-1.4-3.2-3.2-3.2c0,0,0,0,0,0c-7.2,0-13.1-5.9-13.1-13.1c0-1.8-1.4-3.2-3.2-3.2c0,0,0,0,0,0H69c-1.8,0-3.2,1.4-3.2,3.2c0,0,0,0,0,0c0,7.2-5.9,13.1-13.1,13.1c-1.8,0-3.2,1.4-3.2,3.2c0,0,0,0,0,0v44.4c0,1.8,1.4,3.2,3.2,3.2c0,0,0,0,0,0C59.9,160.4,65.8,166.2,65.8,173.5z M55.9,115.8c8.2-1.4,14.6-7.8,16-16h123.1c1.4,8.2,7.8,14.6,16,16v38.5c-8.2,1.4-14.6,7.8-16,16H72c-1.4-8.2-7.8-14.6-16-16V115.8z" /><path class="st0" d="M139.5,146.4h-19.3c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2h10.1v6c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2v-6h2.8c5.8,0,10.6-4.7,10.6-10.6V135c0-1.8-1.4-3.2-3.2-3.2c0,0,0,0,0,0h-23.5v-4c0-2.3,1.9-4.1,4.1-4.1h19.3c1.8,0,3.2-1.4,3.2-3.2c0-1.8-1.4-3.2-3.2-3.2l0,0h-10.1v-6c0-1.8-1.4-3.2-3.2-3.2c-1.8,0-3.2,1.4-3.2,3.2v6h-2.8c-5.8,0-10.6,4.7-10.6,10.6v7.2c0,1.8,1.4,3.2,3.2,3.2h23.5v4C143.7,144.5,141.8,146.4,139.5,146.4z" /><path class="st0"d="M173,144.8c5.4,0,9.8-4.4,9.8-9.8c0-5.4-4.4-9.8-9.8-9.8c-5.4,0-9.8,4.4-9.8,9.8l0,0C163.2,140.4,167.6,144.8,173,144.8zM173,131.6c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0,0,0,0,0,0C169.6,133.1,171.1,131.6,173,131.6z" /><path class="st0" d="M94,144.8c5.4,0,9.8-4.4,9.8-9.8s-4.4-9.8-9.8-9.8c-5.4,0-9.8,4.4-9.8,9.8l0,0C84.2,140.4,88.6,144.8,94,144.8z M94,131.6c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4l0,0C90.7,133.1,92.2,131.6,94,131.6z" /></g></svg></div><div class="nec-bt"><a href="/dashboard-consultor/paquetes/" data-package-id="${package.product_pk}" data-package-cost="${package.cost}"><span><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg></span><span>Comprar</span></a></div></div></div>`);
	return packages.map(({ id, name, product_pk, cost }) => `
				<div class="enu-card" data-package-id="${id}">
						<div class="enu-c-back">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 77.98 77.98">
								<defs>
									<style>
										.cls-1 {
											isolation: isolate;
										}

										.cls-2 {
											fill: url(#linear-gradient);
										}

										.cls-3 {
											fill: url(#linear-gradient-2);
										}

										.cls-4 {
											fill: #00e5e5;
											mix-blend-mode: soft-light;
										}

										.cls-5 {
											fill: #fff;
										}
									</style>
									<linearGradient id="linear-gradient" x1="-4.14" y1="12.68" x2="79.09" y2="63.45" gradientUnits="userSpaceOnUse">
										<stop offset="0.04" stop-color="#252947" />
										<stop offset="0.32" stop-color="#00aee5" />
										<stop offset="0.56" stop-color="#00e5e5" />
										<stop offset="0.87" stop-color="#00e5b5" />
										<stop offset="1" stop-color="#00ae92" />
									</linearGradient>
									<linearGradient id="linear-gradient-2" x1="81.22" y1="54.33" x2="-29.9" y2="13.96" xlink:href="#linear-gradient" />
								</defs>
								<title>signo-peso</title>
								<g class="cls-1">
									<g id="Capa_2" data-name="Capa 2">
										<g id="Capa_1-2" data-name="Capa 1">
											<circle class="cls-2" cx="38.99" cy="38.99" r="38.99" />
											<circle class="cls-3" cx="38.99" cy="38.99" r="33.09" />
											<path class="cls-4" d="M11.7,42A29.21,29.21,0,0,1,64.06,24.21,29.21,29.21,0,1,0,15.58,56.58,29.08,29.08,0,0,1,11.7,42Z" />
											<path class="cls-5" d="M39.47,18.83a2.58,2.58,0,0,1,2.59,2.6v.69a20.9,20.9,0,0,1,7.23,2.4,3.36,3.36,0,0,1-1.59,6.33A3.65,3.65,0,0,1,46,30.4a19.52,19.52,0,0,0-4.14-1.69v7.58C49.39,38.34,52.63,41.43,52.63,47s-4.29,9.17-10.57,9.87v2.65a2.6,2.6,0,0,1-5.19,0v-2.7A25,25,0,0,1,27,53.35a3.39,3.39,0,0,1-1.69-3A3.34,3.34,0,0,1,28.79,47a3.62,3.62,0,0,1,1.95.64,19,19,0,0,0,6.38,2.8V42.48C29.94,40.53,26.4,37.79,26.4,31.85c0-5.49,4.19-9.18,10.47-9.83v-.59A2.58,2.58,0,0,1,39.47,18.83ZM37.12,35V28.26c-2.39.35-3.44,1.55-3.44,3.14S34.38,34,37.12,35Zm4.69,8.73v6.94c2.34-.35,3.54-1.45,3.54-3.25C45.35,45.77,44.5,44.67,41.81,43.72Z" />
										</g>
									</g>
								</g>
							</svg>

							<h5>${name}</h5>
						</div>

						<div class="enu-c-front">
							<div class="">
								<?php //include $_SERVER["DOCUMENT_ROOT"] . "/src/img/index/i-p-dolar.html";
								?>

							</div>

							<div class="nec-bt">
								<a href="/dashboard-consultor/paquetes/" id="btn-search" data-package-id="${product_pk}" data-package-cost="${cost}>
									<span>
										<svg style="width:24px;height:24px" viewBox="0 0 24 24">
											<path fill="#252947" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
										</svg>
									</span>

									<span>
										Ver más
									</span>
								</a>
							</div>
						</div>
					</div>`);
}

function enviarMsj() {

	let g_token = null;

	grecaptcha.execute("6Lfhl9IZAAAAAA5iSF520_ou02EL2zI6xVgxUQm7", { action: "homepage" }).then(function (token) {
		g_token = token;
		console.log(g_token);
	});

	let name = $("#cf-name").val();
	let email = $("#cf-email").val();
	let msj = $("#cf-msg").val();


	if (name == "") {
		notificacion("#cf-name", "Ingresa el nombre", "#cf-name", "bottom center", "error");
	} else if (email == "") {
		notificacion("#cf-email", "Ingresa el correo", "#cf-email", "bottom center", "error");
	} else if (!validarEmail(email)) {
		notificacion("#cf-email", "Ingresa un correo electrónico valido", "#cf-email", "bottom center", "error");
	} else if (msj == "") {
		notificacion("#cf-msg", "Ingresa el mensaje", "#cf-msg", "bottom center", "error");
	} else {
		let dataSend = {
			solicitud: "enviarMsj",
			name,
			email,
			msj
		};

		$.ajax({
			url: "../../controller/universo-controller.php",
			data: dataSend,
			method: "POST",
			dataType: "JSON",
			cache: false
		})
			.done(function (sResponse) {
				console.log(sResponse);
				if (sResponse["respuesta"] == "ok") {
					if (sResponse["mensaje"] != "grecaptcha-error") {
						console.log(sResponse);
						Swal.fire({
							position: 'center',
							icon: "success",
							title: "gracias",
							text: "pronto nos comunicaremos contigo"
						}).then(() => {
							reiniciarForm();
						});
					}
				} else {
					Swal.fire({
						icon: "error",
						title: "opps...",
						text: "No se pudo enviar el mensaje"
					});
				}
			}).fail(function (jqXHR, textStatus, errorThrown) {
				if (jqXHR.status === 0) {
					console.log('Not connect: Verify Network.');
				} else if (jqXHR.status == 404) {
					console.log('Requested page not found [404]');
				} else if (jqXHR.status == 500) {
					console.log('Internal Server Error [500].');
				} else if (textStatus === 'parsererror') {
					console.log('Requested JSON parse failed.');
				} else if (textStatus === 'timeout') {
					console.log('Time out error.');
				} else if (textStatus === 'abort') {
					console.log('Ajax request aborted.');
				} else {
					console.log('Uncaught Error: ' + jqXHR.responseText);
				}
			}).always(function () { });
	}
}

function reiniciarForm() {
	$("#cf-name").val("");
	$("#email").val("");
	$("#cf-msg").val("");
}

const banner_principal_d = $('#banner-principal-desktop');
const banner_principal_m = $('#banner-principal-movil');
const nuestras_especialidades = $('#nespecialidades-carousel');
const en_nuestro_universo = $('#enuniverso-carousel');
const principal_popup = $('#principal-popup');

$("#bnn-izq").click(function () {
	nuestras_especialidades.trigger("prev.owl.carousel", [500]);
});

$("#bnn-der").click(function () {
	nuestras_especialidades.trigger("next.owl.carousel", [500]);
});

$("#bnn-izq-paq").click(function () {
	en_nuestro_universo.trigger("prev.owl.carousel", [500]);
});

$("#bnn-der-paq").click(function () {
	en_nuestro_universo.trigger("next.owl.carousel", [500]);
});

(async function main() {
	principal_popup.owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		slideTransition: 'linear',
		autoplayTimeout: 3500,
		autoplaySpeed: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			}
		}
	});

	banner_principal_d.owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		// autoWidth: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 5000,
		autoHeight: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	banner_principal_m.owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplayTimeout: 5000,
		autoplaySpeed: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	nuestras_especialidades.owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoWidth: true,
		autoplay: true,
		slideTransition: 'linear',
		autoplayTimeout: 5000,
		autoplaySpeed: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				margin: 20,
				center: true
			},
			992: {
				items: 5,
				margin: 30
			}
		}
	});

	try {
		const advisers = await getAdvisers();
		loadAdvisersCards();

		const packages = await getPackages();
		const packageCards = generatePackageCards(packages);
		$('#enuniverso-carousel').html(packageCards);

		en_nuestro_universo.owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			autoWidth: true,
			autoplay: true,
			slideTransition: 'linear',
			autoplayTimeout: 5000,
			autoplaySpeed: 5000,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 1,
					margin: 20,
					center: true
				},
				992: {
					items: 3,
					margin: 30
				}
			}
		});

	} catch (error) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: error
		});
	}
})();

// $("#go-to-contacto").click(function (event) {
// 	event.preventDefault();

// 	$('html, body').animate({
// 		scrollTop: $("#footer").offset().top - 90
// 	}, 950);
// });

$('.pregunta').click(function () {
	if ($(this).parents(".pf-item").hasClass("active")) {
		$(this).parents(".pf-item").removeClass("active");
		$(this).find("svg[data-fa-i2svg]").removeClass("fa-rotate-180");
	} else {
		$('.pf-item.active').removeClass("active");
		$("svg[data-fa-i2svg].fa-rotate-180").removeClass("fa-rotate-180");
		$(this).parents(".pf-item").addClass("active");
		$(this).find("svg[data-fa-i2svg]").addClass("fa-rotate-180");
	}
});

$('#cf-submit').click(function (e) {
	e.preventDefault();

	enviarMsj();
});

$("#btn-close-popup-index").click(function (event) {
	event.preventDefault();
	$("#index-popup").removeClass("showing")
});

$('#btn-close-popup-welcome').click(function (e) {
	$('#welcome-popup').removeClass('showing');
})