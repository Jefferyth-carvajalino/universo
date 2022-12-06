function sendLink() {
	var email = $('#email').val();

	if (email == "") {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Ingresa tu correo electrónico"
		});

	} else if (!validarEmail(email)) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Ingresa un correo electrónico valido"
		});

	} else {

		$.ajax({
			url: "/controller/forgot-password-controller.php",
			data: {
				req: "sendLink",
				email,
			},
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sRes) {
			// console.log(JSON.stringify(sRes));

			if (sRes['res'] == "ok") {
				Swal.fire({
					icon: 'success',
					title: 'Revisa tu correo electrónico',
					text: sRes['msg'],
				});

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
			$('#email').val("");
		});
	}
}

$('#send-link').click(function (e) {
	e.preventDefault();
	sendLink();
});