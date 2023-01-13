function getCountries() {
	return new Promise((resolve, reject) => {
        const url = "https://devdash.universopsiquico.com/api/getAllCountries";
		$.ajax({
			url,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
			method: "GET",
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

function getUser() {
	return new Promise((resolve, reject) => {
        const url = "https://devdash.universopsiquico.com/api/customer/getCostumer";
		$.ajax({
			url,
			method: "GET",
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
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

function getZodiacSign(userBirthdate) {
	const month = new Date(userBirthdate).getMonth() + 1; // B	eacause is an index
	const day = new Date(userBirthdate).getDate() + 1; // Beacause is an index

	if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
		return "Capricornio";
	} else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
		return "Acuario";
	} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
		return "Piscis";
	} else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
		return "Aries";
	} else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
		return "Tauro";
	} else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
		return "Géminis";
	} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
		return "Cáncer";
	} else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
		return "Leo";
	} else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
		return "Virgo";
	} else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
		return "Libra";
	} else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
		return "Escorpio";
	} else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
		return "Sagitario";
	}
}

function updateProfile() {

	let nickname = $('#username').val();
	let name = $('#name').val();
	let correoElectronico = $('#email').val();
	let telefonoFijo = $('#cellphone').val();
	let birth_date = $('#birthdate').val();
	let countryPk = $('#location').val();

	if (username == "") {
		afbgdNotify($('#username'), "Escribe tu nombre de usuario");

	} else if (name == "") {
		afbgdNotify($('#name'), "Escribe tu nombre completo");

	} else if (!validarEmail(correoElectronico)) {
		afbgdNotify($('#correo-electronico'), "Ingresa un correo electrónico válido");

	} else if (telefonoFijo == "") {
		afbgdNotify($('#cellphone'), "Ingresa tu fecha telefono.");

	} else if (birth_date == "") {
		afbgdNotify($('#birthdate'), "Ingresa tu fecha de nacimiento.");

	} else if (birthdate == "") {
		afbgdNotify($('#birthdate'), "Ingresa tu fecha de nacimiento.");

	} else if (countryPk == "seleccionar") {
		afbgdNotify($('#location'), "Selecciona tu ubicación");

	} else {

		let zodiac = getZodiacSign(birth_date);

		var dataSend = {
			req: "updateConsultor",
			name,
			correoElectronico,
			telefonoFijo,
			zodiac,
			birth_date,
			nickname,
			countryPk,
		};

		// if (birth_date != "") {
		// 	dataSend.birth_date = birth_date;
		// }

		$.ajax({
			url: "/controller/dshb-perfil-consultor-controller.php",
			data: dataSend,
			method: "POST",
			dataType: "JSON",
			cache: false,
			beforeSend: function () {
				$('#fsbtn-primary').addClass("loading");
			}

		}).done(function (sRes) {
			// console.log(sRes);

			if (sRes['res'] == "ok") {
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: sRes['msg'],
					showConfirmButton: false,
					timer: 1500
				});

				let user = JSON.parse(localStorage.getItem('user'));

				user["name"] = name;
				user["nickname"] = nickname;
				user["email"] = correoElectronico;
				user["country_fk"] = countryPk;
				user["cell_phone"] = telefonoFijo;
				user["zodiac"] = zodiac;
				user["birth_date"] = birth_date;

				localStorage.setItem('user', JSON.stringify(user));

			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: sRes['msg']
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

		}).always(function () {
			$('#fsbtn-primary').removeClass("loading");
		});
	}
}

$('#btn-update').click(function (e) {
	e.preventDefault();

	updateProfile();
});

$('#btn-descartar').click(function (e) {
	e.preventDefault();

	getUser();
});

async function init() {
	try {
		const countries = await getCountries();
		$('#location').html(countries);

		const userData = await getUser();
		$('#username').val(userData.nickname);
		$('#foto-perfil').attr("data-default-file", user.image_profile_url);
		$('#name').val(user.name);
		$('#email').val(user.email);
		$('#cellphone').val(user.cell_phone);
		$('#birthdate').val(user.birth_date);
		$('#location').val(user.country_fk);

		$('.dropify').dropify({
			messages: {
				'default': 'Arrastra y suelta una imagen aquí o haz click',
				'replace': 'Arrastra y suelta o haz click para reemplazar la imagen',
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
		customFormFunc();

	} catch (error) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: error
		});
	}
}

init();
