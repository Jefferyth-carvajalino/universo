const roleUrl = getUrlSearch("role");
const idUrl = getUrlSearch("id");
const tokenUrl = getUrlSearch("token");

if (((roleUrl == null) || (roleUrl == "")) || ((idUrl == null) || (roleUrl == "")) || ((tokenUrl == null) || (tokenUrl == ""))) {
	window.location.href = '/log-in/';
} else {
	validateLink();
}

function validateLink() {
	$.ajax({
		url: "/controller/forgot-password-controller.php",
		data: {
			req: "validateLink",
			role: roleUrl,
			id: idUrl,
			token: tokenUrl,
		},
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sRes) {
		// console.log(JSON.stringify(sRes));

		if (sRes['res'] == "ok") {

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
	});
}

function updatePassword() {
	let newPass = $('#new-password').val();
	let repeatPass = $('#repeat-password').val();

	if (newPass == "") {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Ingresa la nueva contraseña."
		});

	} else if (repeatPass == "") {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Repite la contraseña."
		});

	} else if (repeatPass != newPass) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Las contraseñas no coinciden."
		});

	} else {
		$.ajax({
			url: "/controller/forgot-password-controller.php",
			data: {
				req: "updatePassword",
				role: roleUrl,
				id: idUrl,
				token: tokenUrl,
				pass: repeatPass,
			},
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sRes) {
			// console.log(JSON.stringify(sRes));

			if (sRes['res'] == "ok") {
				window.location.href = "/log-in/";

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
		});
	}
}

$('#update-password').click(function (e) {
	e.preventDefault();

	updatePassword();
});