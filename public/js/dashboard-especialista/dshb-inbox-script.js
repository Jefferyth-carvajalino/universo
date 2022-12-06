let chatReading = null;
let chatWindowClosed = false;

function getChats() {
	$.ajax({
		url: "/controller/inbox-controller.php",
		data: {
			req: "getChats"
		},
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		if (sResponse['res'] == "ok") {
			$('#chats-list').html(sResponse['chatList']);
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
	});
}

function getConversation(element) {
	$('.chat-item.reading').removeClass("reading");
	let customer = $(element).attr("data-customer");
	$(element).addClass("reading");

	$('#customer-chat-name').text($(element).find(".cp-name-row").find('p').text());
	$('#customer-chat-img').attr('src', $(element).find("img").attr('src'));

	var dataSend = {
		req: "getConversation",
		customer
	};

	$.ajax({
		url: "/controller/inbox-controller.php",
		data: dataSend,
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {

		if (sResponse['res'] == "ok") {
			chatWindowClosed = false;
			$('#chat-right-panel').removeClass("hidden");

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
		// verifyIncomingMsgs();
	});
}

getChats();

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

$('#btn-back-chatlist').click(function (e) {
	e.preventDefault();
	$('#chat-right-panel').addClass("hidden");
	chatWindowClosed = true;
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
