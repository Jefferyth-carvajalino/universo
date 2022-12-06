function renderBubbleMessage({ kindOfMsg, message, sender, date }) {
	let bubble = '';
	let writer = 'cwb-me';

	if (parseInt(sender) === 0) {
		writer = ''; // The writer is Adviser
	}

	if (parseInt(kindOfMsg) === 0) {
		bubble = `<div class="cw-bubble-row ${writer}">
                                <p class="cw-bubble">${message}</p>
                                <span class="bubble-time">${date}</span>
                            </div >`;

	} else if (parseInt(kindOfMsg) === 1) {
		bubble = `<div class="cw-bubble-row ${writer}">
								<div class="cw-bubble-img-container">
									<img src="${message}" class="chat-img" onclick="showImgOnModal(this)" >
								</div>
								<span class="bubble-time">${date}</span>
							</div >`;
	}

	$('#cmb-bubbles-container').append(bubble);
	$('#cmb-bubbles-container').stop().animate({ scrollTop: $('#cmb-bubbles-container')[0].scrollHeight }, 0);
}

function showImgOnModal(element) {
	$('#simg-modal').addClass('showing');
	$('#img-modal').attr('src', $(element).attr('src'));
}

function sendMessage(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/chat-controller.php",
			data: { ...dataToSend, req: "sendMsg" },
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sResponse) {
			if (sResponse['res'] == "ok") {
				console.log("[SendMsg]: ", sResponse['msg']);
				resolve();
			} else {
				reject(sResponse['msg']);
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

function createChat(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/chat-controller.php",
			data: { ...dataToSend, req: "createChat" },
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sResponse) {
			if (sResponse['res'] == "ok") {
				resolve(sResponse['chatId']);

			} else {
				reject(sResponse['msg']);
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

function getChatId(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/chat-controller.php",
			data: { ...dataToSend, req: "getChatId" },
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sResponse) {
			if (sResponse['res'] == "ok") {
				resolve(sResponse['chatId']);

			} else {
				reject(sResponse['msg']);
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

function getChatState(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/chat-controller.php",
			data: { ...dataToSend, req: "getChatState" },
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sResponse) {
			if (sResponse['res'] == "ok") {
				resolve(parseInt(sResponse['chatState']));

			} else {
				reject(sResponse['msg']);
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

function uploadImage(dataSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `/controller/chat-upload-img-controller.php`,
			method: "POST",
			dataType: "JSON",
			cache: false,
			data: dataSend,
			processData: false,
			contentType: false,
			success: (response) => {
				resolve(response['img_path']);
			},
			error: function (xhr, status, thrownError) {
				if (xhr.status == 401) {
					reject("No tienes permisos para ver la información.");
				} else {
					console.log(JSON.stringify(xhr));
					reject("Lo sentimos, ha surgido un error interno al subir la imagen!");
				}
			}
		});
	});
}

function getAdviserData(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/chat-controller.php",
			data: { ...dataToSend, req: "getRecipientData" },
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sResponse) {
			if (sResponse['res'] == "ok") {
				resolve(sResponse['recipientData']);
			} else {
				reject(sResponse['msg']);
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

function sendChatRate(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/chat-controller.php",
			data: { ...dataToSend, req: "sendChatRate" },
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sResponse) {
			if (sResponse['res'] == "ok") {
				resolve();

			} else {
				reject(sResponse['msg']);
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

function sendBadRateMessage(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/send-bad-rate-message.php",
			data: { ...dataToSend, solicitud: "sendMail" },
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sResponse) {
			if (sResponse['res'] == "ok") {
				resolve();

			} else {
				reject(sResponse['msg']);
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

function cancelRequestToChat(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/chat-controller.php",
			data: { ...dataToSend, req: "denyChat" },
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sResponse) {
			if (sResponse['res'] == "ok") {
				resolve();
			} else {
				reject(sResponse['msg']);
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

const adviserSelected = getUrlSearch("adviser");
let chatId = null;
let chatState = 0;
let chatAudio = document.getElementById('chat-audio');
let endChatRequestedByCustomerOrAdviser = false;
let urlToRedirectWhenFinish = '/dashboard-consultor/buscar-asesor/';

// Check if is mobile
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	$('header').addClass('in-chat');
	$('main').addClass('in-chat');
	$('#s-dashboard').addClass('in-chat');
	$('.dshb-content-container').addClass('in-chat');
	$('.topbar').addClass('in-chat');
}

async function main() {
	if (parseInt(user.total_amount_purchases) === 0) {
		await Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: "Tu saldo es insuficiente para continuar con la conversación, recarga tu saldo."
		});
		window.location.href = "/dashboard-consultor/paquetes/";

		return true;
	}

	chatId = await createChat({ adviserId: adviserSelected, customerId: user.id });
	$('.loader-wrapper').addClass("active");

	do {
		chatState = await getChatState({ chatId: chatId });

	} while (chatState === 0);

	if (chatState === 3) {
		window.location.href = '/dashboard-consultor/buscar-asesor/';
	}

	$('.loader-wrapper').removeClass("active");

	let chatTemporalHistory = JSON.parse(localStorage.getItem("chatTemporalHistory"));

	if (chatTemporalHistory !== null) {
		chatTemporalHistory.forEach(chatMessage => {
			renderBubbleMessage(chatMessage);
		});

	} else {
		chatTemporalHistory = [];
		localStorage.setItem("chatTemporalHistory", JSON.stringify(chatTemporalHistory));
	}

	let pusher = new Pusher(PUSHER_APP_KEY, {
		cluster: 'us3',
		authEndpoint: '/controller/pusher/auth.php',
	});

	let adviserChannel = pusher.subscribe(`private-${adviserSelected}`);

	adviserChannel.bind('pusher:subscription_succeeded', async function () {
		console.warn('[Pusher] Subscription to "adviser-2" succeeded');

		const adviserData = await getAdviserData({ chatId: chatId });
		$('#adviser-card-img').attr("src", adviserData.image_profile_url);
		$('#adviser-img-thumbnail').attr("src", adviserData.image_profile_url);
		$('#adviser-name').text(adviserData.nickname);
		$('#adviser-card-name').text(adviserData.nickname);
		$('#adviser-card-readings').text(adviserData.readings);
		$('#adviser-description').text(adviserData.description);
	});

	adviserChannel.bind('pusher:subscription_error', function (err) {
		console.error('[PUSHER] Subscription to "adviser-2" channel error:' + err.type);
		setTimeout(() => {
			adviserChannel = pusher.subscribe(`private-${adviserSelected}`);
		}, 5000);
	});

	adviserChannel.bind('new-message', function (response) {
		getNotification();
		chatAudio.play();
		renderBubbleMessage(response);

		chatTemporalHistory.push(response);
		localStorage.setItem("chatTemporalHistory", JSON.stringify(chatTemporalHistory));
	});

	adviserChannel.bind(`client-without-free-minutes-${adviserSelected}-chat`, function (response) {
		$("#three-minutes-popup").addClass("showing");

		setTimeout(() => {
			$("#three-minutes-popup").removeClass("showing");
		}, 5000);
	});


	if (user["free_minutes"] == "1") {
		console.log("se activa");
		Swal.fire({
			title: '<strong>¡Nuestro asesor Psíquico tendrá grandes respuestas para ti!</strong>',
			icon: 'info',
			html:
				' recuerda que tienes un tiempo mínimo de chat gratis, para obtener la asesoría completa debes comprar alguno de nuestros paquetes con promoción dando clic al siguiente ' +
				'<a href="https://universopsiquico.com/dashboard-consultor/paquetes/">link</a> ',
			focusConfirm: true,
		})
	}

	adviserChannel.bind(`client-finish-adviser-${adviserSelected}-chat`, async function (response) {
		const { chatTotalCost, durationTime, finishedBy, isCustomerOutOfFounds, customerWithFreeMinutes } = response;
		let swalText = `La conversación ha sido finalizada por el asesor, la conversación duró ${durationTime} y el costo total fue de $${parseFloat(chatTotalCost)}USD.`;
		endChatRequestedByCustomerOrAdviser = true;

		if (finishedBy === "customer") {
			swalText = `La conversación duró ${durationTime} y el costo total fue de $${parseFloat(chatTotalCost)}USD. ¡Las cartas nos mostraron una gran respuesta para ti! Si quieres conocerla compra ya alguno de nuestros paquetes, disponible desde $1 Dólar.`;
		}

		if (isCustomerOutOfFounds) {
			urlToRedirectWhenFinish = '/dashboard-consultor/paquetes/';
		}

		await Swal.fire({
			icon: 'warning',
			title: 'Chat finalizado',
			text: swalText
		});

		user.total_amount_purchases = parseFloat(user.total_amount_purchases) - parseFloat(chatTotalCost);
		localStorage.setItem("user", JSON.stringify(user));

		localStorage.removeItem("chatTemporalHistory");

		pusher.disconnect();

		if (user.free_minutes == "0") {
			$('.rate-modal').addClass('active');
		} else {
			try {
				sendChatRate({ chatId, rate: 5, comment: '', adviserId: adviserSelected });


				window.location.href = urlToRedirectWhenFinish;

			} catch (error) {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: error
				});
			}

			let user = JSON.parse(localStorage.getItem('user'));

			user["free_minutes"] = "0";

			localStorage.setItem('user', JSON.stringify(user));
		}
	});

	adviserChannel.bind(`client-${adviserSelected}-one-minute-left`, async function (response) {
		await Swal.fire({
			icon: 'warning',
			title: 'Saldo insuficiente',
			text: "Te queda un minuto para finalizar el chat. Para continuar tú conversación, recuerda recargar tu saldo."
		});
	});

	$('#finish-chat').click(async function (e) {
		e.preventDefault();
		endChatRequestedByCustomerOrAdviser = true;
		adviserChannel.trigger(`client-request-to-finish-adviser-${adviserSelected}-chat`, { chatId });
	});

	window.addEventListener('beforeunload', function (e) {
		e.preventDefault();

		if (!endChatRequestedByCustomerOrAdviser) {
			e.returnValue = '';
		}
		adviserChannel.trigger(`client-request-to-finish-adviser-${adviserSelected}-chat`, { chatId });
	});

}
main();

$("#msg-input").emojioneArea({
	placeholder: "Escribe tu mensaje...",
	searchPosition: "bottom",
	shortnames: true
});

$("#msg-input")[0].emojioneArea.on("keyup", function (textarea, e) {
	if (e.keyCode == 13 && !e.shiftKey) {
		e.preventDefault();
		$('#send-msg-btn').click();
	}
});

$('#send-msg-btn').click(async function (e) {
	e.preventDefault();

	const message = $("#msg-input")[0].emojioneArea.getText();

	if (message !== '') {
		$('#send-msg-btn').addClass("loading");
		$('#send-msg-btn').prop("disabled", true);

		try {
			const dataToSend = {
				kindOfMsg: 0,
				message,
				chatId,
				adviserId: adviserSelected,
			};

			await sendMessage(dataToSend);

			$("#msg-input")[0].emojioneArea.setText("");
			$('#send-msg-btn').removeClass("loading");
			$('#send-msg-btn').prop("disabled", false);

		} catch (error) {
			$('#send-msg-btn').removeClass("loading");
			$('#send-msg-btn').prop("disabled", false);
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error
			});
		}
	}

});

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

$('#file-btn').click(function (e) {
	e.preventDefault();
	$('.upload-img-layout').addClass("active");
});

$('#btn-close-uplimglayout').click(function () {
	$('.upload-img-layout').removeClass("active");
});
$('#btn-close-popup-three-minutes').click(function () {
	$('#three-minutes-popup').removeClass("showing");
});

$('#btn-send-img').click(async function (e) {
	e.preventDefault();
	const image = $('#upload-img-input')[0].files[0];

	if (typeof image === "undefined") {
		notificacion("#upload-img-input", "Selecciona una imagen", "#upload-img-input", "bottom center", "error");

	} else {
		let dataSend = new FormData();
		dataSend.append("img", image);
		dataSend.append("folder_parent", chatId);

		$('#btn-send-img').addClass("loading");
		$('#btn-send-img span:last-child').text("Enviando...");
		$('#btn-send-img').prop("disabled", true);

		try {
			const imagePath = await uploadImage(dataSend);

			const dataToSend = {
				kindOfMsg: 1,
				message: imagePath,
				chatId,
				adviserId: adviserSelected,
			};

			await sendMessage(dataToSend);
			$('.upload-img-layout').removeClass("active");
			$('#btn-send-img').removeClass("loading");
			$('#btn-send-img span:last-child').text("ENVIAR");
			$('#btn-send-img').prop("disabled", false);
			$('.dropify-clear').click();

		} catch (error) {
			$('#btn-send-img').removeClass("loading");
			$('#btn-send-img span:last-child').text("ENVIAR");
			$('#btn-send-img').prop("disabled", false);
			$('.dropify-clear').click();
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error
			});
		}
	}
});

$('#btn-send-rate').click(async function (e) {
	e.preventDefault();
	const rateSelected = $('input[name=rate]:checked').val();
	const comment = $('#comment').val();

	console.log("rateSelected", rateSelected);
	console.log("comment", comment);

	if (typeof rateSelected === "undefined") {
		notificacion(".rate", "Selecciona una calificación", ".rate", "bottom center", "error");

	} else if (comment === "") {
		notificacion("#comment", "Escribe un comentario", "#comment", "bottom center", "error");

	} else {
		try {
			await sendChatRate({ chatId, rate: 5, comment: comment, adviserId: adviserSelected });

			// await sendChatRate({ chatId, rate: rateSelected, comment: comment, adviserId: adviserSelected });

			// if (parseInt(rateSelected) <= 2) {
			// 	await sendBadRateMessage({ chatId: chatId, rate: rateSelected, comment: comment });
			// }

			window.location.href = urlToRedirectWhenFinish;

		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: error
			});
		}
	}

});

$('.close-img-modal').click(function (e) {
	$('#simg-modal').removeClass('showing');
});

$('#btn-cancel-request').click(async function (e) {
	await cancelRequestToChat({ chatId: chatId });
	window.location.href = '/dashboard-consultor/buscar-asesor/';
});

$("#btn-whatsapp").css("display", "none");


