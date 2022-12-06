const $chatAudio = document.getElementById("chat-audio");
const adviserSelected = getUrlSearch("adviser");
let chatReading = null;
let chatTime = 0;

function getBalance() {
	$.ajax({
		url: "/controller/dshb-perfil-consultor-controller.php",
		data: {
			req: "getBalance"
		},
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		if (sResponse['res'] == "ok") {

			if (sResponse['msg'] > 0) {
				if (adviserSelected !== null) {
					getAdviserToChat(adviserSelected);
					getConsultorChat();
				} else {
					console.log("Get last chat");
					getConsultorChat();
				}
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: "Tu saldo es insuficiente para continuar con la conversación, recarga tu saldo."
				}).then((result) => {
					if (result.value) {
						window.location.href = "/dashboard-consultor/paquetes/";
					} else {
						window.location.href = "/dashboard-consultor/paquetes/"
					}
				});
			}

		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: sResponse['msg']
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

	});
}

function startChat(adviserId) {
	$.ajax({
		url: "/controller/chat-controller.php",
		data: {
			req: "startChat",
			adviserId,
			customerId: user.id,
		},
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		console.log(JSON.stringify(sResponse));
		if (sResponse['res'] == "ok") {
			chatReading = sResponse['msg'];
			verifyIncomingMsgs();

		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: sResponse['msg']
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

	});
}

function getAdviserToChat(adviserId) {
	$.ajax({
		url: "/controller/advisers-controller.php",
		data: {
			req: "getAdviserToChat",
			adviserId,
		},
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		console.log(JSON.stringify(sResponse));
		if (sResponse['res'] == "ok") {
			$('#adviser-card-img').attr('src', sResponse['msg']['image_profile_url']);
			$('#adviser-img-thumbnail').attr('src', sResponse['msg']['image_profile_url']);
			$('#adviser-card-name').text(sResponse['msg']['nickname']);
			$('#adviser-card-qualification').text(sResponse['msg']['average']);
			$('#adviser-card-readings').text(sResponse['msg']['readings']);
			$('#adviser-description').text(sResponse['msg']['description']);
			$('#adviser-name').text(sResponse['msg']['nickname']);

		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: sResponse['msg']
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

	});
}

function getConsultorChat() {
	$.ajax({
		url: "/controller/chat-controller.php",
		data: {
			req: "getConsultorChat",
			adviser: adviserSelected,
		},
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		if (sResponse['res'] == "ok") {
			if (sResponse['msg'] == "yes") {
				chatReading = sResponse['chatReading'];
				$('#asesor-info-chat').attr("data-chat", chatReading);

				Swal.fire({
					icon: 'warning',
					title: 'Conversación Anterior',
					text: "Ésta es tu ultima conversación, ¿Quiéres continuar o deseas cambiar de asesor?",
					showCancelButton: true,
					confirmButtonText: 'Continuar conversación',
					cancelButtonText: 'Cambiar asesor',
					reverseButtons: true,
				}).then((result) => {
					if (result.value) {
						getAdviserToChat(sResponse['adviserId']);
						getConversation(chatReading);
					} else if (result.dismiss === Swal.DismissReason.cancel) {
						window.location.href = "/dashboard-consultor/buscar-asesor/";
					}
				});

			} else {
				console.log("No hay chat");
				if (adviserSelected !== null) {
					startChat(adviserSelected);
				} else {
					window.location.href = "/dashboard-consultor/buscar-asesor/";
				}
			}

		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: sResponse['msg']
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

	});
}

function getConversation(chat) {
	var dataSend = {
		req: "getConversation",
		chat
	};

	$.ajax({
		url: "/controller/chat-controller.php",
		data: dataSend,
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		if (sResponse['res'] == "ok") {
			$('#cmb-bubbles-container').html(sResponse['msg']);
			$('#cmb-bubbles-container').stop().animate({ scrollTop: $('#cmb-bubbles-container')[0].scrollHeight }, 0);

		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: sResponse['msg']
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
		verifyIncomingMsgs();
		$('#cmb-bubbles-container').stop().animate({ scrollTop: $('#cmb-bubbles-container')[0].scrollHeight }, 500);
	});
}

function sendMsg() {
	var msg = $('#msg-input').val();
	var chat = chatReading;

	var dataSend = {
		req: "sendMsg",
		kindOfMsg: 0,
		msg,
		chat
	};

	$.ajax({
		url: "/controller/chat-controller.php",
		data: dataSend,
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		if (sResponse['res'] == "ok") {
			if (sResponse['canSend'] == "yes") {
				$('#cmb-bubbles-container').append(sResponse['msg']);

			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: sResponse['msg']
				}).then((result) => {
					if (result.value) {
						window.location.href = "/dashboard-consultor/paquetes/";
					} else {
						window.location.href = "/dashboard-consultor/paquetes/"
					}
				});
			}

		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: sResponse['msg']
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
		$("#msg-input")[0].emojioneArea.setText("");
		$('#cmb-bubbles-container').stop().animate({ scrollTop: $('#cmb-bubbles-container')[0].scrollHeight }, 1000);
	});
}

function sendMultimediaMsg(imgPath) {
	let msg = imgPath;
	let chat = chatReading;

	let dataSend = {
		req: "sendMsg",
		kindOfMsg: 1,
		msg,
		chat
	};

	$.ajax({
		url: "/controller/chat-controller.php",
		data: dataSend,
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		if (sResponse['res'] == "ok") {
			if (sResponse['canSend'] == "yes") {
				$('#cmb-bubbles-container').append(sResponse['msg']);

			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: sResponse['msg']
				}).then((result) => {
					if (result.value) {
						window.location.href = "/dashboard-consultor/paquetes/";
					} else {
						window.location.href = "/dashboard-consultor/paquetes/"
					}
				});
			}

		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: sResponse['msg']
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
		$('.upload-img-layout').removeClass("active");
		$("#upload-img-input").val();
		$('#cmb-bubbles-container').stop().animate({ scrollTop: $('#cmb-bubbles-container')[0].scrollHeight }, 1000);
	});
}

function verifyIncomingMsgs() {
	$.ajax({
		url: "/controller/chat-controller.php",
		data: {
			'req': "verifyIncomingMsgs",
			chat: chatReading,
			chatTime: chatTime,
		},
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		if (sResponse['res'] == "ok") {
			if (sResponse['msg']['withNewMsg'] == "yes") {
				$chatAudio.play();
				$('#cmb-bubbles-container').append(sResponse['msg']['newMsg']);
				$('#cmb-bubbles-container').stop().animate({ scrollTop: $('#cmb-bubbles-container')[0].scrollHeight }, 1000);
			}

			chatTime = chatTime + 1;

		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: sResponse['msg']
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
		setTimeout(() => {
			verifyIncomingMsgs();

		}, 1000);
	});
}

function uploadImage(imgPath) {
	let img = $("#upload-img-input")[0].files[0];

	if (typeof img === "undefined") {
		notificacion("#upload-img-input", "Selecciona una imagen", "#upload-img-input", "bottom center", "error");

	} else {
		let dataSend = new FormData();

		dataSend.append("img", img);
		dataSend.append("folder_parent", imgPath);

		$.ajax({
			url: `/controller/chat-upload-img-controller.php`,
			method: "POST",
			dataType: "JSON",
			cache: false,
			data: dataSend,
			processData: false,
			contentType: false,
			success: (res) => {
				sendMultimediaMsg(res['img_path']);
			},
			error: function (xhr, status, thrownError) {
				if (xhr.status == 401) {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "No tienes permisos para ver la información.",
					});
				} else {
					console.log(JSON.stringify(xhr));

					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Lo sentimos, ha surgido un error interno!",
					});
				}
			}
		});
	}
}

getBalance();

$('.dropify').dropify({
	height: '86%',
	messages: {
		'default': 'Arrastra ó suelta una imagen aquí o haz click',
		'replace': 'Arrastra ó suelta o haz click para reemplazar la imagen',
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

$("#msg-input").emojioneArea({
	placeholder: "Escribe tu mensaje...",
	searchPosition: "bottom",
	shortnames: true
});

$('#send-msg-btn').click(function (e) {
	e.preventDefault();
	sendMsg();
});

$('#file-btn').click(function (e) {
	e.preventDefault();
	$('.upload-img-layout').addClass("active");
});

$('#btn-send-img').click(function (e) {
	e.preventDefault();
	uploadImage(chatReading);
});

$('#btn-close-uplimglayout').click(function () {
	$('.upload-img-layout').removeClass("active");
});