$('.dropify').dropify({
	messages: {
		'default': 'Arrastra y suelta un archivo de tipo jpg aquí o haz click',
		'replace': 'Arrastra y suelta un archivo de tipo jpg o haz click para reemplazar el archivo',
		'remove': 'Eliminar',
		'error': 'Ooops, ha ocurrido un error.'
	},
	error: {
		'fileSize': 'El tamaño del archivo es muy grande: ({{ value }} max).',
		'minWidth': 'El ancho de la imagen es muy pequeño: ({{ value }}}px min).',
		'maxWidth': 'El ancho de la imagen es muy grande: ({{ value }}}px max).',
		'minHeight': 'El alto de la imagen es muy pequeño: ({{ value }}}px min).',
		'maxHeight': 'El alto de la imagen es muy grande: ({{ value }}px max).',
		'imageFormat': 'El formato de la imagen no está permitido: solo ({{ value }}).'
	}
});

function getCountries() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/countries-controller.php",
			data: {
				req: "getAllCountriess",
			},
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sRes) {
			if (sRes['res'] === "ok") {
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

			reject();

		});
	});
}

function getCities(countryId) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/cities-controller.php",
			data: {
				req: "getCitiesById",
				countryId,
			},
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sRes) {
			if (sRes['res'] === "ok") {
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

			reject();

		});
	});
}

async function init() {
	const thisYear = new Date().getFullYear();
	const thisMonth = new Date().getMonth() + 1; // plus one beacouse is an array index
	const today = new Date().getDate();
	const eighteenYearsAgo = `${thisYear - 18}-${(thisMonth < 10) ? '0' + thisMonth : thisMonth}-${today}`;
	const hundredYearsAgo = `${thisYear - 100}-${(thisMonth < 10) ? '0' + thisMonth : thisMonth}-${today}`;
	// $('#fecha-n').attr("max", eighteenYearsAgo);
	$('#fecha-n').attr("min", hundredYearsAgo);

	try {
		const countries = await getCountries();
		localStorage.setItem('countries', JSON.stringify(countries));
		let CountriesOptions = `<option value="Seleccionar"> - Seleccionar - </option>`;

		CountriesOptions += countries.map((item) => `<option value="${item.id}">${item.name}</option>`)

		$('#countries').html(CountriesOptions);

	} catch (error) {
		console.warn('[ERROR] ', error);
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: error
		});
	}
}
init();

$("#countries").on("change", async function () {
	if ($(this).val() != "Seleccionar") {
		try {
			const countryId = parseInt($(this).val());
			const cities = await getCities(countryId);

			let CitiesOptions = `<option value="Seleccionar"> - Seleccionar - </option>`;

			CitiesOptions += cities.map((item) => `<option value="${item.id}">${item.name}</option>`)

			$('#cities').html(CitiesOptions);
		} catch (error) {
			console.warn('[ERROR] ', error);
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error
			});
		}
		$("#cities").attr("disabled", false);
	} else {
		$("#cities").attr("disabled", true);
	}
});

$("#fecha-n").on("change", function () {
	let mayorEdad = validaMayorDeEdad($('#fecha-n').val())
	if (mayorEdad == false) {
		notificacion("#fecha-n", "eres menor de edad ingresa una fecha valida", "#fecha-n", "bottom center", "error");
		$('#fecha-n').val("");
	}
});

function sendWorkWithUsForm(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "../../controller/send-trabaja-con-nosotros-controller.php",
			data: { ...dataToSend, solicitud: "sendTrabNos" },
			method: "POST",
			dataType: "JSON",
			cache: false
		})
			.done(function (sResponse) {
				if (sResponse["respuesta"] == "ok") {
					if (sResponse["mensaje"] != "grecaptcha-error") {
						resolve();
					}

				} else {
					reject("No se pudo enviar el mensaje");
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

function saveWorkWithUsForm(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "../../controller/save-trabaja-con-nosotros-controller.php",
			data: { ...dataToSend, solicitud: "createWorkWithUs" },
			method: "POST",
			dataType: "JSON",
			cache: false
		})
			.done(function (sResponse) {
				console.log(sResponse);
				if (sResponse["respuesta"] == "ok") {
					if (sResponse["mensaje"] != "grecaptcha-error") {
						resolve();
					}

				} else {
					reject("No se pudo enviar el mensaje");
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

function uploadImage(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `../../controller/imageUploadController.php`,
			method: "POST",
			dataType: "JSON",
			cache: false,
			data: dataToSend,
			processData: false,
			contentType: false,
			success: (res) => {
				resolve(res['img_path']);
			},
			error: function (xhr, status, thrownError) {
				if (xhr.status == 401) {
					reject("No tienes permisos para ver la información.");
				} else {
					console.log(JSON.stringify(xhr));
					reject("Lo sentimos, ha surgido un error interno!");
				}
			}
		});
	});
}

$('#t-email').keypress(function (e) {
	return soloEmail(e);
});

$('#btn-send-tra-nos').click(async function (event) {
	event.preventDefault();
	let g_token = null;

	grecaptcha.execute("6Lfhl9IZAAAAAA5iSF520_ou02EL2zI6xVgxUQm7", { action: "homepage" }).then(function (token) {
		g_token = token;
	});

	let first_name = $("#primer-n").val();
	let second_name = $("#segundo-n").val();
	let Surname = $("#primer-a").val();
	let second_surname = $("#segundo-a").val();
	let nickname = $("#nickname").val();
	let email = $("#t-email").val();
	email = email.toLowerCase();
	let cities = $("#cities").val();
	let address = $("#address").val();
	let phone = $("#phone").val();
	let cell_phone = $("#cell-phone").val();
	let fecha_n = $("#fecha-n").val();
	let perfil_servicio = $("#perfil-servicio").val();
	let experiencia_l = $("#experiencia-l").val();
	let plataformas = $("#plataformas").val();
	let image_profile = $("#image-profile")[0].files[0];
	let f_identidad = $("#f-identidad")[0].files[0];
	let countries = $("#countries").val();
	let countriesId = $("#countries").val();

	if ($("#countries").val() != "Seleccionar") {
		let countries_Id = $("#countries").val();

		let l_countries = JSON.parse(localStorage.getItem("countries"));
		let find_countries = l_countries.find(country => country.id == countries_Id);

		countries = find_countries.name;
	}

	if (first_name == "") {
		notificacion("#primer-n", "Ingresa tu primer nombre", "#primer-n", "bottom center", "error");

	} else if (Surname == "") {
		notificacion("#primer-a", "Ingresa tu primer apellido", "#primer-a", "bottom center", "error");

	} else if (nickname == "") {
		notificacion("#nickname", "Ingresa tu nombre profesional", "#nickname", "bottom center", "error");

	} else if (email == "") {
		notificacion("#t-email", "Ingresa tu correo electrónico", "#t-email", "bottom center", "error");

	} else if (!validarEmail(email)) {
		notificacion("#t-email", "Ingresa un correo electrónico valido", "#t-email", "bottom center", "error");

	} else if (countries == "Seleccionar") {
		notificacion("#countries", "Ingresa tu pais", "#countries", "bottom center", "error");

	} else if (cities == "Seleccionar") {
		notificacion("#cities", "Ingresa tu ciudad", "#cities", "bottom center", "error");

	} else if (address == "") {
		notificacion("#address", "Ingresa tu dirección", "#address", "bottom center", "error");

	} else if (cell_phone == "") {
		notificacion("#cell-phone", "Ingresa número celular", "#cell-phone", "bottom center", "error");

	} else if (fecha_n == "") {
		notificacion("#fecha-n", "Ingresa tu fecha de nacimiento", "#fecha-n", "bottom center", "error");

	} else if (perfil_servicio == "") {
		notificacion("#perfil-servicio", "Ingresa tu perfil de servicio", "#perfil-servicio", "bottom center", "error");

	} else if (experiencia_l == "") {
		notificacion("#experiencia-l", "Ingresa tu experencia laboral", "#experiencia-l", "bottom center", "error");

	} else if (plataformas == "") {
		notificacion("#plataformas", "ingresa plataformas en las que has trabajado", "#plataformas", "bottom center", "error");

	} else if (typeof image_profile === "undefined") {
		notificacion("#img-p", "Ingresa tu imagen de perfil", "#img-p", "bottom center", "error");

	} else if (typeof f_identidad === "undefined") {
		notificacion("#img-id", "Ingresa tu foto de identidad", "#img-id", "bottom center", "error");

	} else {
		try {
			let profileImageFormData = new FormData();

			profileImageFormData.append("img", image_profile);
			profileImageFormData.append("folder_parent", "trabaja-con-nosotros");
			profileImageFormData.append("product_name", `profile-${normalize(nickname)}`);

			console.log("[Loading...] Subiendo Imagen de perfil");
			const profileImageUrl = await uploadImage(profileImageFormData);
			console.log("[Loading...] Imagen de perfil subida");

			let identityImageFormData = new FormData();

			identityImageFormData.append("img", f_identidad);
			identityImageFormData.append("folder_parent", "trabaja-con-nosotros");
			identityImageFormData.append("product_name", `identity-${normalize(nickname)}`);

			const identityImageUrl = await uploadImage(identityImageFormData);

			let dataToSend = {
				first_name,
				second_name,
				Surname,
				second_surname,
				nickname,
				email,
				countries,
				cities,
				countriesId,
				address,
				phone,
				cell_phone,
				fecha_n,
				perfil_servicio,
				experiencia_l,
				plataformas,
				image_profile: profileImageUrl,
				f_identidad: identityImageUrl,
			};

			console.log(dataToSend);

			console.log("[Loading...] Subiendo formulario");
			await sendWorkWithUsForm(dataToSend);
			await saveWorkWithUsForm(dataToSend);
			console.log("[Loading...] Formulario subido");

			await Swal.fire({
				position: 'center',
				icon: "success",
				title: "gracias",
				text: "Pronto nos comunicaremos contigo"
			});

			window.location.href = '/';

		} catch (error) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: error,
			});
		}
	}
});
