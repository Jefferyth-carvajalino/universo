function getUniversoProfit() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/universo-profit-controller.php",
			data: { req: "getProfit" },
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sResponse) {
			if (sResponse['res'] == "ok") {
				resolve(sResponse['msg']['amount']);
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

function renderBubbleMessage({ kindOfMsg, message, sender, date }) {
	let bubble = '';
	let writer = 'cwb-me';

	if (parseInt(sender) === 1) {
		writer = ''; // The writer is Customer
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

function renderOldMessages(oldMessages) {
	let oldMessagesDates = [];
	// const todayUnix = new Date(Date.now());
	// const todayYear = todayUnix.getFullYear();
	// const todayMonth = todayUnix.getMonth() + 1;
	// const todayDay = todayUnix.getDay() + 1;
	// const todayDate = `${todayYear}-${(todayMonth < 10) ? '0' + todayMonth : todayMonth}-${(todayDay < 10) ? '0' + todayDay : todayDay}`;

	oldMessages.forEach(message => {
		let messageDateYear = new Date(message['fullDate']).getFullYear();
		let messageDateMonth = new Date(message['fullDate']).getMonth() + 1;
		let messageDateDay = new Date(message['fullDate']).getDay() + 1;
		let messageFullDate = `${messageDateYear}-${(messageDateMonth < 10) ? '0' + messageDateMonth : messageDateMonth}-${(messageDateDay < 10) ? '0' + messageDateDay : messageDateDay}`;

		if (!oldMessagesDates.includes(messageFullDate)) {
			let dateString = message['fullDate'];

			// if (messageFullDate === todayDate) {
			//     dateString = "Hoy"
			// }

			$('#cmb-bubbles-container').append(`<div class="cw-date-row"><p>${dateString}</p></div>`);
			$('#cmb-bubbles-container').stop().animate({ scrollTop: $('#cmb-bubbles-container')[0].scrollHeight }, 0);
			oldMessagesDates.push(messageFullDate);
		}

		renderBubbleMessage(message);
		chatTemporalHistory.push(message);
		localStorage.setItem("chatTemporalHistory", JSON.stringify(chatTemporalHistory));

	});
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

function saveActiveChat(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/chat-controller.php",
			data: { ...dataToSend, req: "manageChatSessionId" },
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

function getChatConversationHistory(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/chat-controller.php",
			data: { ...dataToSend, req: "getChatConversationHistory" },
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sResponse) {
			if (sResponse['res'] == "ok") {
				resolve(sResponse['msg']);
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

function getCustomerData(dataToSend) {
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

function discountToCustomerBalance(dataToSend) {
	$.ajax({
		url: "/controller/customer-controller.php",
		data: { ...dataToSend, req: "discountToCustomerBalance" },
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		if (sResponse['res'] == "ok") {
			console.log("Se descontó dinero al customer.");
		} else {
			console.warn(sResponse['msg']);
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

function completeCustomerFreeMinutes(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/customer-controller.php",
			data: { ...dataToSend, req: "completeCustomerFreeMinutes" },
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

function updateDurationTime(dataToSend) {
	$.ajax({
		url: "/controller/chat-controller.php",
		data: { ...dataToSend, req: "updateDurationTime" },
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		if (sResponse['res'] == "ok") {
			console.log("Se actualizó la duración del chat.");
		} else {
			console.warn(sResponse['msg']);
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

function sendMailAdviserFinishedChat(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/send-mail-adviser-finish-chat.php",
			data: { ...dataToSend, req: "sendMail" },
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

function finishChat(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/chat-controller.php",
			data: { ...dataToSend, req: "finishChat" },
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

async function finishChatRequest({ finishedBy = null, isCustomerOutOfFounds = false }) {
	if (finishedBy) {
		const durationTime = `${(timerHours < 10) ? '0' + timerHours : timerHours}:${(timerMinutes < 10) ? '0' + timerMinutes : timerMinutes}:${(timerSeconds < 10) ? '0' + timerSeconds : timerSeconds}`
		clearTimeout(timerTimeout);
		timerTimeout = null;
		await finishChat({ chatId: chatId, totalPrice: customerChatTotalCost, adviserProfit: adviserProfit });

		if (finishedBy === "adviser") {
			await sendMailAdviserFinishedChat({ chatId });
		}

		myAdviserChannel.trigger(`client-finish-adviser-${user.id}-chat`, { chatTotalCost: customerChatTotalCost, durationTime, finishedBy, isCustomerOutOfFounds });

		await Swal.fire({
			icon: 'warning',
			title: 'Chat finalizado',
			text: `La conversación finalizó, tus ingresos sobre esta conversación es de: $${adviserProfit}USD.`
		});

		pusher.disconnect();

		localStorage.removeItem("adviserActiveChatId");
		localStorage.removeItem("oldChatsConversationHistory");
		localStorage.removeItem("chatTemporalHistory");
		localStorage.removeItem("chatTimerHoursHistory");
		localStorage.removeItem("chatTimerSecondsHistory");
		localStorage.removeItem("chatTimerMinutesHistory");
		localStorage.removeItem("activeChatTotalCost");

		window.location.href = '/dashboard-especialista/inbox/';

	}
}

function notifyOneMinuteLeftToCustomer() {
	myAdviserChannel.trigger(`client-${user.id}-one-minute-left`, { 'chat': chatId });
}

function renderZodiacImage(zodiacSign) {
	let zodiacIcon = "";

	switch (zodiacSign) {
		case "Piscis":
			zodiacIcon = "/src/img/horoscopo/piscis.svg";
			break;

		case "Aries":
			zodiacIcon = "/src/img/horoscopo/aries.svg";
			break;

		case "Tauro":
			zodiacIcon = "/src/img/horoscopo/tauro.svg";
			break;

		case "Géminis":
			zodiacIcon = "/src/img/horoscopo/geminis.svg";
			break;

		case "Cáncer":
			zodiacIcon = "/src/img/horoscopo/cancer.svg";
			break;

		case "Leo":
			zodiacIcon = "/src/img/horoscopo/leo.svg";
			break;

		case "Virgo":
			zodiacIcon = "/src/img/horoscopo/virgo.svg";
			break;

		case "Libra":
			zodiacIcon = "/src/img/horoscopo/libra.svg";
			break;

		case "Escorpio":
			zodiacIcon = "/src/img/horoscopo/escorpio.svg";
			break;

		case "Sagitario":
			zodiacIcon = "/src/img/horoscopo/sagitario.svg";
			break;

		case "Capricornio":
			zodiacIcon = "/src/img/horoscopo/capricornio.svg";
			break;

		default:
			zodiacIcon = "/src/img/horoscopo/acuario.svg";
			break;
	}

	$('#zodiac-icon').attr("src", zodiacIcon);
}

function round(value, precision) {
	const multiplier = Math.pow(10, precision || 0);
	return Math.round(value * multiplier) / multiplier;
}

async function updateBalances(currentMinutes) {
	const totalToGetPay = (universo_psiquico_profit + parseFloat(user.adviserPrice)) / 4;
	// customerBalance -= (universo_psiquico_profit + parseFloat(user.adviserPrice)) / 4;
	customerBalance -= parseFloat(round(totalToGetPay, 2).toFixed(2));
	customerBalance = parseFloat(round(customerBalance, 2).toFixed(2));

	// customerChatTotalCost += (universo_psiquico_profit + parseFloat(user.adviserPrice)) / 4;
	customerChatTotalCost += parseFloat(round(totalToGetPay, 2).toFixed(2));
	customerChatTotalCost = parseFloat(round(customerChatTotalCost, 2).toFixed(2));

	console.log("customerWithFreeMinutes", customerWithFreeMinutes);
	if (!customerWithFreeMinutes) {
		// adviserProfit += ((universo_psiquico_profit + parseFloat(user.adviserPrice)) / 4) / 4;
		adviserProfit += parseFloat(round((totalToGetPay - (totalToGetPay * universo_psiquico_profit)), 1).toFixed(1));
		adviserProfit = parseFloat(round(adviserProfit, 1).toFixed(1));

		$('#chat-total-cost').text(`$${adviserProfit}`);
		localStorage.setItem("activeChatTotalCost", adviserProfit);
	}

	discountToCustomerBalance({ customerId: customerId, newAmount: customerBalance });

	if (customerWithFreeMinutes && currentMinutes === 3) {
		await completeCustomerFreeMinutes({ customerId: customerId });

		customerWithFreeMinutes = false;

		myAdviserChannel.trigger(`client-without-free-minutes-${user.id}-chat`, {});
	}

	if (customerBalance === (universo_psiquico_profit + parseFloat(user.adviserPrice))) {
		console.log("LE QUEDA 1 MINUTO AL CUSTOMER");
		notifyOneMinuteLeftToCustomer();
	}
}

async function customerCanContinuesChatting() {
	try {
		if (customerBalance <= 0) {
			// clearTimeout(timerTimeout);

			finishChatRequest({ finishedBy: "customer", isCustomerOutOfFounds: true });
			return false;
		}

		return true;
	} catch (error) {
		console.error(error);
	}
}

function runTimer() {
	timerTimeout = setTimeout(() => {
		if (((timerSeconds + 1) === 15) || ((timerSeconds + 1) === 30) || ((timerSeconds + 1) === 45) || ((timerSeconds + 1) === 60)) {
			if ((timerSeconds + 1) === 60) {
				if ((timerMinutes + 1) === 60) {
					timerHours += 1;
					timerMinutes = 0;

				} else {
					timerMinutes += 1;
				}

				timerSeconds = 0;
			} else {
				timerSeconds++;
			}

			updateBalances(timerMinutes);
			if (!customerCanContinuesChatting()) {
				return false;
			}

		} else {
			timerSeconds += 1;
		}

		if (chatId) {
			updateDurationTime({ chatId });
			renderTimer();
		}
	}, 1000);
}

function renderTimer() {
	$('#timer-hours').text((timerHours < 10) ? `0${timerHours}` : timerHours);
	$('#timer-minutes').text((timerMinutes < 10) ? `0${timerMinutes}` : timerMinutes);
	$('#timer-seconds').text((timerSeconds < 10) ? `0${timerSeconds}` : timerSeconds);

	localStorage.setItem("chatTimerHoursHistory", timerHours);
	localStorage.setItem("chatTimerMinutesHistory", timerMinutes);
	localStorage.setItem("chatTimerSecondsHistory", timerSeconds);

	if (timerTimeout) {
		runTimer();
	}
}

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

$('.close-img-modal').click(function (e) {
	$('#simg-modal').removeClass('showing');
});

let pusher = new Pusher(PUSHER_APP_KEY, {
	cluster: 'us3',
	authEndpoint: '/controller/pusher/auth.php',
});

let universo_psiquico_profit = 0.0;

let myAdviserChannel = pusher.subscribe(`private-${user.id}`);
let chatId = parseInt(localStorage.getItem("adviserActiveChatId"));
let chatAudio = document.getElementById('chat-audio');
let endChatRequestedByCustomerOrAdviser = false;
let adviserProfit = 0.0; // Earnings to Adviser
let customerChatTotalCost = 0.0; // Total that customer must pay
let chatTemporalHistory = JSON.parse(localStorage.getItem("chatTemporalHistory"));

let chatTimerHoursHistory = JSON.parse(localStorage.getItem("chatTimerHoursHistory"));
let chatTimerMinutesHistory = JSON.parse(localStorage.getItem("chatTimerMinutesHistory"));
let chatTimerSecondsHistory = JSON.parse(localStorage.getItem("chatTimerSecondsHistory"));

let customerId = null;
let customerBalance = 0;
let customerWithFreeMinutes = false;

let timerTimeout = null;
let timerHours = 0;
let timerMinutes = 0;
let timerSeconds = 0;

// Check if is mobile
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	$('header').addClass('in-chat');
	$('main').addClass('in-chat');
	$('#s-dashboard').addClass('in-chat');
	$('.dshb-content-container').addClass('in-chat');
	$('.topbar').addClass('in-chat');
}

if ((localStorage.getItem("adviserActiveChatId") !== null) || (localStorage.getItem("adviserActiveChatId") !== "")) {
	if (chatTemporalHistory !== null) {
		chatTemporalHistory.forEach(chatMessage => {
			renderBubbleMessage(chatMessage);
		});

	} else {
		chatTemporalHistory = [];
		localStorage.setItem("chatTemporalHistory", JSON.stringify(chatTemporalHistory));
	}
}

if ((localStorage.getItem("activeChatTotalCost") !== null)) {
	adviserProfit = parseFloat(localStorage.getItem("activeChatTotalCost"));
	$('#chat-total-cost').text(`$${adviserProfit}`);
} else {
	localStorage.setItem("activeChatTotalCost", adviserProfit);
}

if ((chatTimerHoursHistory !== null) && (chatTimerMinutesHistory !== null) && (chatTimerSecondsHistory !== null)) {
	timerHours = parseInt(chatTimerHoursHistory);
	timerMinutes = parseInt(chatTimerMinutesHistory);
	timerSeconds = parseInt(chatTimerSecondsHistory);
}

window.addEventListener('beforeunload', function (e) {
	e.preventDefault();
	finishChatRequest({ finishedBy: "adviser" });

	if (!endChatRequestedByCustomerOrAdviser) {
		e.returnValue = '';
	}
});

myAdviserChannel.bind('pusher:subscription_succeeded', async function () {
	console.warn('[Pusher] Subscription to "adviser-2" succeeded');
	// $('#chat-link a').attr("href", `/dashboard-especialista/chat/?chatId=${chatId}`);
	// $('#chat-link').removeClass('hidden');

	universo_psiquico_profit = await getUniversoProfit();
	universo_psiquico_profit = parseFloat(universo_psiquico_profit);

	const customerData = await getCustomerData({ chatId: chatId });
	const { id, total_amount_purchases, image_profile_url, nickname, genre, zodiac, free_minutes } = customerData;
	customerId = id;
	customerBalance = total_amount_purchases;
	customerWithFreeMinutes = (parseInt(free_minutes) === 1) ? true : false;
	console.log("free_minutes------1", free_minutes);
	$('#customer-chat-img').attr("src", image_profile_url);
	$('#customer-chat-name').text(`${nickname}`);
	$('#customer-chat-genre').text(`(${genre})`);
	$('#customer-zodiac').text(`(${zodiac})`);
	$('#chat-total-cost').text(`$${adviserProfit}`);
	renderZodiacImage(zodiac);

	console.log("temporal history: ", chatTemporalHistory);
	if (chatTemporalHistory.length === 0) {
		oldChatsConversationHistory = await getChatConversationHistory({ customer: customerId });
		renderOldMessages(oldChatsConversationHistory);
	}

	await saveActiveChat({ activeChat: chatId });

	runTimer();
});

myAdviserChannel.bind('pusher:subscription_error', function (err) {
	console.error(`[PUSHER] Subscription to "adviser-${user.id}" channel error: ${err.type}`);
});

myAdviserChannel.bind('new-message', function (response) {
	chatAudio.play();
	renderBubbleMessage(response);

	chatTemporalHistory.push(response);
	localStorage.setItem("chatTemporalHistory", JSON.stringify(chatTemporalHistory));
});

myAdviserChannel.bind(`client-request-to-finish-adviser-${user.id}-chat`, async function (response) {
	endChatRequestedByCustomerOrAdviser = true;
	finishChatRequest({ finishedBy: "customer" });
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
				adviserId: user.id,
				customerId,
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

$('#file-btn').click(function (e) {
	e.preventDefault();
	$('.upload-img-layout').addClass("active");
});

$('#btn-close-uplimglayout').click(function () {
	$('.upload-img-layout').removeClass("active");
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
				adviserId: user.id,
				customerId,
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

$('#finish-chat').click(async function (e) {
	e.preventDefault();
	endChatRequestedByCustomerOrAdviser = true;
	finishChatRequest({ finishedBy: "adviser" });
});

$("#btn-whatsapp").css("display", "none");



