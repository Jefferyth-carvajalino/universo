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

function changeConnectionStatus(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/advisers-controller.php",
			data: { ...dataToSend, req: "changeConnectionStatus" },
			method: "POST",
			dataType: "JSON",
			cache: false

		}).done(function (sRes) {
			if (sRes['res'] === "ok") {
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

		})
	});
}




if (localStorage.getItem("user").rol === "adviser") {
	if (parseInt(user.online) === 0) {
		$('#disconnected-option').attr("checked", true);
	} else if (parseInt(user.online) === 2) {
		$('#busy-option').attr("checked", true);
	} else {
		$('#connected-option').attr("checked", true);
	}
}

$('#logout-btn').click(async function (e) {
	e.preventDefault();

	try {
		const serverResponse = await logout();
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

		eval(serverResponse);

	} catch (error) {

		if (error instanceof ReferenceError) {
			console.error(error);
			window.location.href = '/log-in/';
			return
		}

		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: error
		});
	}
});

// $('#btn-sidebar-actuator').click(function (e) {
// 	e.preventDefault();

// 	$('.dshb-sidebar').toggleClass("show");
// });

$('.online-status-radio').on('change', async function () {
	try {
		await changeConnectionStatus({ status: parseInt($(this).val()) });
		user.online = $(this).val();
		localStorage.setItem('user', JSON.stringify(user));

	} catch (error) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: error
		});
	}
});
