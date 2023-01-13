// PushManager.logConsole = true;
// const PUSHER_APP_KEY = "ad597f195d0b287738bc"; // Development
const PUSHER_APP_KEY = "61e3675c3418e09804b8"; // Production

let user = JSON.parse(localStorage.getItem('user'));
let newChatAudio = document.getElementById('new-chat-audio');
let audioPlayedCount = 0;
let withNewChat = false;
let timeLapsed = 0;

function logout() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/login-controller.php",
			data: {
				req: "logout"
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

function checkForNewChat(dataToSend) {
	if (withNewChat) {
		timeLapsed++;
	} else {
		timeLapsed = 0;
	}

	$.ajax({
		url: "/controller/chat-controller.php",
		data: { ...dataToSend, req: "getPendingChat" },
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		if (sResponse['res'] === "ok") {
			if (sResponse['withNewChat'] === "yes") {
				withNewChat = true;
				$('.new-conversation-modal').addClass("active");
				// console.log("customerName: ", sResponse['chat']);
				const { chatId, customerName } = sResponse['chat'];
				$('#new-conversation-msg').text(`${customerName} desea iniciar una conversación contigo.`);
				localStorage.setItem("adviserActiveChatId", chatId);


				if (timeLapsed === 0) {
					getNotification(true)
				}

				if (audioPlayedCount < 3) {
					newChatAudio.play();

				} else {
					denyChat({ chatId: chatId });
					audioPlayedCount = 0;
				}

			} else {
				withNewChat = false;
				$('.new-conversation-modal').removeClass("active");
				getNotification(false)
			}

			setTimeout(() => {
				checkForNewChat(dataToSend);
			}, 500);

		} else {
			console.warn("[CHECK FOR NEW CHAT]", sResponse['msg']);
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

function acceptChat(dataToSend) {
	$.ajax({
		url: "/controller/chat-controller.php",
		data: { ...dataToSend, req: "acceptChat" },
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		if (sResponse['res'] === "ok") {
			window.location.href = `/dashboard-especialista/chat/?chatId=${dataToSend.chatId}`;

		} else {
			console.warn("[ACCEPT CHAT ERROR]", sResponse['msg']);
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

setInterval(function () {
	if ((localStorage.getItem('user')) !== null) {
		if (user.rol == "customer") {
			getBalance();
		}
	}
}, 1000);

// setInterval(function () {
// 	if ((localStorage.getItem('user')) !== null) {
// 		if (user.rol == "adviser") {
// 			countHoroscopeRequestsByAdviserId()
// 		}
// 	}
// }, 1000);

function getBalance() {
	$.ajaxSetup({
		headers: {
			'Authorization': `Bearer ${sessionStorage.getItem('token')}`
		}
	});
	const url = "https://devdash.universopsiquico.com/api/customer/getBalance";
	$.ajax({
		url,

		method: "GET",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		if (sResponse['res'] == "ok") {

			let user = JSON.parse(localStorage.getItem('user'));

			user["total_amount_purchases"] = sResponse['msg'],

				localStorage.setItem('user', JSON.stringify(user));
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

function denyChat(dataToSend) {
	// console.log("denyChat", dataToSend);
	$.ajax({
		url: "/controller/chat-controller.php",
		data: { ...dataToSend, req: "denyChat" },
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sResponse) {
		if (sResponse['res'] === "ok") {
			localStorage.setItem("adviserActiveChatId", "");
			// localStorage.removeItem("adviserActiveChatId");
			$('.new-conversation-modal').removeClass("active");

		} else {
			console.warn("[DENY CHAT ERROR]", sResponse['msg']);
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

if (user !== null) {
	if (user.rol === "adviser") {
		if ((localStorage.getItem("adviserActiveChatId") === null) || (localStorage.getItem("adviserActiveChatId") === "")) {
			checkForNewChat({ adviserId: user.id });
		}
	}
}

$('#btn-accept').click(function (e) {
	e.preventDefault();
	const chatId = parseInt(localStorage.getItem("adviserActiveChatId"));
	acceptChat({ adviserId: user.id, chatId: chatId, adviserNickname: user.nickname });
});

$('#btn-deny').click(function (e) {
	e.preventDefault();
	const chatId = parseInt(localStorage.getItem("adviserActiveChatId"));
	denyChat({ chatId: chatId });
	checkForNewChat({ adviserId: user.id });
});

/**
 * these twice functions allow customForm functionality
 */

customFormFunc();

function customFormFunc() {
	$(".form-input-container .jff-custom-input").each(function (index) {
		verifyInputValue($(this));
		$(this).on({
			focus: function () {
				$(this).siblings("label").addClass("on-focus");
			},
			focusout: function () {
				verifyInputValue($(this));
			},
		});
	});
}

function verifyInputValue(input) {
	if ($(input).val() != "") {
		$(input).siblings("label").addClass("on-focus");
	} else {
		$(input).siblings("label").removeClass("on-focus");
	}
}

function validaMayorDeEdad(userBirthDate) {
	const thisYear = new Date().getFullYear();
	const eighteenYearsAgo = thisYear - 18;
	let userYear = new Date(userBirthDate).getFullYear();

	if (userYear > eighteenYearsAgo) {
		return false;
	}
	return true;
}

let normalize = (function () {
	let from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
		to = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
		mapping = {};

	for (let i = 0, j = from.length; i < j; i++)
		mapping[from.charAt(i)] = to.charAt(i);

	return function (str) {
		let ret = [];
		for (let i = 0, j = str.length; i < j; i++) {
			let c = str.charAt(i);
			if (mapping.hasOwnProperty(str.charAt(i)))
				ret.push(mapping[c]);
			else
				ret.push(c);
		}
		return ret.join('').replace(/[^-A-Za-z0-9]+/g, '-').toLowerCase();
	}
})();

function showPagePopup() {
	setInterval(function () {
		$('#index-popup').addClass('showing');
	}, 70000);
}

$(document).ready(function () {
	showPagePopup();
})

$('#btn-close-popup-welcome').click(function (e) {
	$('#welcome-popup').removeClass('showing');
})

$('#btn-close-popup-servicios-c').click(function (e) {
	$('#servicios-c-popup').removeClass('showing');
})

$('#btn-servicios').click(function (e) {
	console.log("entra serv");
	// $('#servicios-c-popup').addClass('showing');
})

$('#btn-close-popup-index').click(function (e) {
	$('#index-popup').removeClass('showing');
	showPagePopup();
})



function validateCurrentPage() {
	const path = window.location.pathname;
	const pathSplited = path.split('/')

	if (pathSplited[2] !== '' && pathSplited[2] === "chat") {
		return true;
	}

	return false;
}

function temporizador() {
	// console.log("Temporizador corriendo...");
	let timer = setTimeout(() => {
		isUserActive = false;
		sessionTimerManager(timer);
	}, 7200000);
	return timer;
}

async function sessionTimerManager(timer) {
	if (!timer && isUserActive) {
		timer = temporizador();
	} else if (timer && isUserActive) {
		clearTimeout(timer);
		timer = null;
		timer = temporizador();
		// console.log("nuevo time out", timer);
	} else {
		// console.log("deteniendo temporizador...");
		clearTimeout(timer)
		isUserActive = false;
		try {
			await logout();

			user = null;
			localStorage.removeItem("user");
			localStorage.removeItem("adviserActiveChatId");
			localStorage.removeItem("oldChatsConversationHistory");
			localStorage.removeItem("chatTemporalHistory");
			localStorage.removeItem("chatTimerHoursHistory");
			localStorage.removeItem("chatTimerSecondsHistory");
			localStorage.removeItem("chatTimerMinutesHistory");
			localStorage.removeItem("activeChatTotalCost");
			localStorage.removeItem("notificationToken");
			localStorage.removeItem("HoroscopesToAnswer");
			localStorage.removeItem("countHoroscope");

			await Swal.fire({
				icon: 'warning',
				title: 'Sesion expirada',
				text: 'Tu sesion a caducado'
			});

			window.location.href = '/log-in/';

		} catch (error) {
			console.error(error.response)
		}
	}
}

// function getTokenNotification() {
// 	$.ajax({
// 		url: "/controller/customer-controller.php",
// 		data: {
// 			req: "getTokenNotification",
// 		},
// 		method: "POST",
// 		dataType: "JSON",
// 		cache: false

// 	}).done(function (sResponse) {
// 		if (sResponse['res'] == "ok") {

// 			localStorage.setItem("notificationToken", sResponse['msg']);

// 		} else {
// 			Swal.fire({
// 				icon: 'error',
// 				title: 'Oops...',
// 				text: sResponse['msg']
// 			});
// 		}

// 	}).fail(function (jqXHR, textStatus, errorThrown) {

// 		if (jqXHR.status === 0) {
// 			console.log('Not connect: Verify Network.');

// 		} else if (jqXHR.status == 404) {
// 			console.log('Requested page not found [404]');

// 		} else if (jqXHR.status == 500) {
// 			console.log('Internal Server Error [500].');

// 		} else if (textStatus === 'parsererror') {
// 			console.log('Requested JSON parse failed.');

// 		} else if (textStatus === 'timeout') {
// 			console.log('Time out error.');

// 		} else if (textStatus === 'abort') {
// 			console.log('Ajax request aborted.');

// 		} else {
// 			console.log('Uncaught Error: ' + jqXHR.responseText);

// 		}

// 	});
// }

let timer = null;
let isUserActive = true;
let key = "AAAAX1Q2BWE:APA91bHaQm0p983-S8utgziSvUKL1kNe3h7xfsYgtawPAEReuYrpjI_LuXxq7liUQjsbX84IxDMm6C17ew2NPvZqVFT3y-dixKUMnUM6qVVO7uT2iqL2E3e8IjGVZvROL83XmropG0K0";
let to = localStorage.getItem("notificationToken");

let notification = {
	'title': 'UNIVERSO PSIQUICO',
	'body': 'Tienes un nuevo chat!',
	'icon': 'https://universopsiquico.com//src/img/commons/brand.png',
	'sound': "https://universopsiquico.com//src/audio/chat-song.mp3",
	'click_action': 'https://universopsiquico.com/',
};

let notificationH = {
	'title': 'UNIVERSO PSIQUICO',
	'body': 'Tienes un nuevo Horóscopo!',
	'icon': 'https://universopsiquico.com//src/img/commons/brand.png',
	'sound': "https://universopsiquico.com//src/audio/chat-song.mp3",
	'click_action': 'https://universopsiquico.com/dashboard-especialista/horoscopo/',
};

if (!isMobile()) {
	$(window).click(function () {
		isUserActive = true;
		const isInChatPage = validateCurrentPage();

		if (localStorage.getItem('user') !== null && !isInChatPage) {
			sessionTimerManager(timer);
		}
		// console.log("clicj");
	});

	if (localStorage.getItem('user') !== null) {
		const isInChatPage = validateCurrentPage();
		if (!isInChatPage) {
			sessionTimerManager(timer);
		}
	}

}

function getNotification(par) {
	if (par === true) {
		fetch('https://fcm.googleapis.com/fcm/send', {
			'method': 'POST',
			'headers': {
				'Authorization': 'key=' + key,
				'Content-Type': 'application/json'
			},
			'body': JSON.stringify({
				'notification': notification,
				'to': to
			})
		}).then(function (response) {
			// console.log(response);
		}).catch(function (error) {
			console.error(error);
		});
	}
}

function getNotificationHoroscope(par) {
	if (par === true) {
		fetch('https://fcm.googleapis.com/fcm/send', {
			'method': 'POST',
			'headers': {
				'Authorization': 'key=' + key,
				'Content-Type': 'application/json'
			},
			'body': JSON.stringify({
				'notification': notificationH,
				'to': to
			})
		}).then(function (response) {
			// console.log(response);
		}).catch(function (error) {
			console.error(error);
		});
	}
}

getTokenNotification()

function getTokenNotification() {
	navigator.serviceWorker.register("../../sw.js", { scope: "/" })
		.then(
			function (reg) {
				var serviceWorker;
				if (reg.installing) {
					serviceWorker = reg.installing;
					// console.log('Service worker installing');
				} else if (reg.waiting) {
					serviceWorker = reg.waiting;
					// console.log('Service worker installed & waiting');
				} else if (reg.active) {
					serviceWorker = reg.active;
					// console.log('Service worker active');
				}

				if (serviceWorker) {
					console.log("sw current state", serviceWorker.state);
					if (serviceWorker.state == "activated") {

						console.log("sw already activated - Do watever needed here");
						messaging.getToken().then((currentToken) => {
							console.log("mensaje tok", currentToken);
							localStorage.setItem("notificationToken", currentToken);
						});
					}

					serviceWorker.addEventListener("statechange", function (e) {
						console.log("sw statechange : ", e.target.state);
						if (e.target.state == "activated") {

							console.log("Just now activated. now we can subscribe for push notification")

							messaging.getToken().then((currentToken) => {
								console.log("mensaje tok", currentToken);
								localStorage.setItem("notificationToken", currentToken);
							});
						}
					});
				}
			},
			function (err) {
				console.error('unsuccessful registration with ', "../../sw.js", err);
			}
		);
}

function countHoroscopeRequestsByAdviserId() {
	$.ajax({
		url: "/controller/horoscope-requests-controller.php",
		data: {
			req: "getHoroscopeRequestsByAdviserId",
			adviserId: parseInt(user.id),
		},
		method: "POST",
		dataType: "JSON",
		cache: false
	}).done(function (sResponse) {
		if (sResponse['res'] == "ok") {

			let countH = localStorage.getItem("countHoroscope");
			console.log("countH", parseInt(countH));
			console.log("(sResponse['msg']).length", (sResponse['msg']).length);

			if ((sResponse['msg']).length > 0) {
				$("#cant-hor").css('display', 'flex');
				$("#cant-hor").text(sResponse['msg'].length);
			}

			if ((sResponse['msg']).length > 0 && (sResponse['msg']).length > parseInt(countH)) {
				getNotificationHoroscope(true);
				localStorage.setItem("countHoroscope", (sResponse['msg']).length);
			} else {
				getNotificationHoroscope(false)
			}
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



// messaging.getToken().then((currentToken) => {
// 	console.log("mensaje tok", currentToken);
// 	localStorage.setItem("notificationToken", currentToken);
// });
