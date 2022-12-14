function getCountries() {
	return new Promise((resolve, reject) => {
        const url = "https://devdash.universopsiquico.com/api/advicer/auth/login";
		$.ajax({
			url,
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

function login(dataToSend) {
	return new Promise((resolve, reject) => {
        const url = "https://devdash.universopsiquico.com/api/advicer/auth/login";
		$.ajax({
			url,
			data: { ...dataToSend },
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (response) {
            sessionStorage.setItem("token", response['token']);
            resolve(response['data']);
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

function signIn(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/login-controller.php",
			data: { ...dataToSend, req: "signIn" },
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sRes) {
			if (sRes['res'] == "ok") {
				resolve();

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

async function init() {
	const thisYear = new Date().getFullYear();
	const thisMonth = new Date().getMonth() + 1; // plus one beacouse is an array index
	const today = new Date().getDate();
	const eighteenYearsAgo = `${thisYear - 18}-${(thisMonth < 10) ? '0' + thisMonth : thisMonth}-${today}`;
	const hundredYearsAgo = `${thisYear - 100}-${(thisMonth < 10) ? '0' + thisMonth : thisMonth}-${today}`;
	$('#sign-in-birthdate').attr("max", eighteenYearsAgo);
	$('#sign-in-birthdate').attr("min", hundredYearsAgo);

	try {
		const countries = await getCountries();
		$('#sign-in-country').html(countries);

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

$('.lgntab-link').each(function (index) {
	$(this).click(function (e) {
		e.preventDefault();

		if (!$(this).hasClass("active")) {
			$('.lgntab-link').removeClass("active");

			$(this).addClass("active");

			if ($(this).attr("data-tc") == "lgntab-i-1") {
				$('#lgn-itabs-c').removeClass("show-right");

			} else {
				$('#lgn-itabs-c').addClass("show-right");
			}
		}
	});
});

$('#go-to-login').click(function (index) {
	$('.lgntab-link[data-tc="lgntab-i-2"]').removeClass("active");
	$('.lgntab-link[data-tc="lgntab-i-1"]').addClass("active");
	$('#lgn-itabs-c').removeClass("show-right");
});

$('#login-form').submit(async function (e) {
	e.preventDefault();
	gtag_report_conversion();
	const username = $('#login-username').val();
	const password = $('#login-password').val();

	if (username === "") {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Ingresa tu nombre de usuario ó tu correo electrónico."
		});

	} else if (password === "") {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Ingresa tu contraseña."
		});

	} else {
		try {
			// messaging.getToken().then((currentToken) => {
			// 	console.log("mensaje tok", currentToken);
			// 	localStorage.setItem("notificationToken", currentToken);
			// });

			// getTokenNotification()

			// let notificationToken = localStorage.getItem("notificationToken");

			const user = await login({ email:username, password });
			$('#login-username').val("");
			$('#login-password').val("");

			localStorage.setItem('user', JSON.stringify(user));
			localStorage.setItem("countHoroscope", 0);

			console.log("USER ROL: ", typeof (user.rol));
			console.log("USER ROL: ", user.rol);
			if (user.rol === "adviser") {
				window.location.href = '/dashboard-especialista/perfil/';
			} else {
				window.location.href = '/dashboard-consultor/buscar-asesor/';
			}


		} catch (error) {
			console.warn("[ERROR] ", error);
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error
			});
		}
	}
});

function gtag_report_conversion() {
	var callback = function () {
		if (typeof (url) !=
			'undefined') {
			window.location = url;
		}
	};
	gtag('event', 'conversion', {
		'send_to': 'AW-1003325170/TR6mCLaSnsMCEPKNtt4D',
	});
	return false;
}

$('#signin-form').submit(async function (e) {
	e.preventDefault();
	gtag_report_conversion();

	let name = $('#sign-in-name').val();
	name = name.toUpperCase();
	const username = $('#sign-in-username').val();
	const email = $('#sign-in-email').val();
	// const cellphone = $('#sign-in-cellphone').val();
	// const birthdate = $('#sign-in-birthdate').val();
	const genre = $('#sign-in-genre').val();
	// const country = $('#sign-in-country').val();
	const password = $('#sign-in-password').val();
	console.log("PASSWORD LENGTH", password.length);
	const passwordRepeated = $('#sign-in-password-repeated').val();

	if (name === "") {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Ingresa tu nombre completo."
		});

	} else if (username === "") {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Ingresa un nombre de usuario"
		});

	} else if (email === "") {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Ingresa tu correo electrónico."
		});

	} else if (!validarEmail(email)) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Ingresa un correo electrónico valido."
		});

		// } else if (birthdate === "") {
		// 	Swal.fire({
		// 		icon: 'error',
		// 		title: 'Oops...',
		// 		text: "Ingresa tu fecha de nacimiento."
		// 	});

		// } else if (!validaMayorDeEdad(birthdate)) {
		// 	Swal.fire({
		// 		icon: 'error',
		// 		title: 'Oops...',
		// 		text: "Para registrarte en Universo Psiquico, debe ser mayor de edad."
		// 	});

	} else if (genre == "") {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Selecciona tu genero."
		});

		// } else if ((country === "") || (country === "seleccionar")) {
		// 	Swal.fire({
		// 		icon: 'error',
		// 		title: 'Oops...',
		// 		text: "Selecciona tu ubicación."
		// 	});

	} else if (password === "") {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Ingresa tu contraseña."
		});

	} else if (password.length < 8) {
		Swal.fire({
			icon: 'error',
			title: 'Contraseña debil',
			text: "Ingresa una contraseña con mínimo 8 caractéres."
		});

	} else if (passwordRepeated === "") {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Repite la contraseña."
		});

	} else if (passwordRepeated !== password) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Las contraseñas no coinciden."
		});

	} else {
		// const zodiac = getZodiacSign(birthdate);

		try {
			await signIn({
				name,
				username,
				email,
				cellphone: "000000",
				birthdate: "0000-00-00",
				genre,
				zodiac: "Sin definir",
				country: 48,
				password: passwordRepeated
			});

			$('#sign-in-name').val("");
			$('#sign-in-username').val("");
			$('#sign-in-email').val("");
			$('#sign-in-tel').val("");
			// $('#sign-in-birthday').val("");
			$('#sign-in-location').val("seleccionar");
			$('#sign-in-password').val("");
			$('#sign-in-password-repeated').val("");

			$('.lgntab-link[data-tc="lgntab-i-2"]').removeClass("active");
			$('.lgntab-link[data-tc="lgntab-i-1"]').addClass("active");
			$('#lgn-itabs-c').removeClass("show-right");

			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: "Te has registrado satisfactoriamente!",
				showConfirmButton: false,
				timer: 5500
			});

			let notificationToken = localStorage.getItem("notificationToken");

			const user = await login({ username, pass: password, notificationToken });

			localStorage.setItem('user', JSON.stringify(user));

			console.log("USER ROL: ", typeof (user.rol));
			console.log("USER ROL: ", user.rol);
			if (user.rol === "adviser") {
				window.location.href = '/dashboard-especialista/perfil/';
			} else {
				window.location.href = '/dashboard-consultor/buscar-asesor/';
				// Swal.fire({
				// 	title: 'Cuentas con 3 dolares gratis con cualquier asesor',
				// 	confirmButtonText: `Ok`,
				// }).then((result) => {
				// window.location.href = '/dashboard-consultor/buscar-asesor/';
				// })
			}


			return gtag_report_conversion('');

		} catch (error) {
			console.warn("[ERROR] ", error);
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error
			});
		}
	}
});

$('#sign-in-name').keypress(function (e) {
	return soloLetras(e);
});

$('#sign-in-username').keypress(function (e) {
	return soloUsuario(e);
});

$('#sign-in-email').keypress(function (e) {
	return soloEmail(e);
});

$('#sign-in-cellphone').keypress(function (e) {
	return soloNumeros(e);
});

$('#sign-in-password, #sign-in-password-repeated').keypress(function (e) {
	return soloPass(e);
});

$('.show-password-btn').click(function (e) {
	$(this).toggleClass('showing');

	if ($(this).hasClass('showing')) {
		$('#login-password').attr('type', 'text');
	} else {
		$('#login-password').attr('type', 'password');
	}
})
