$.ajax({
	url: "/controller/chat-controller.php",
	data: {
		'req': "verifyNewMsgsToGlobal",
		chat: chatReading,
		chatTime: chatTime,
	},
	method: "POST",
	dataType: "JSON",
	cache: false

}).done(function (sResponse) {
	if (sResponse['res'] == "ok") {
		// if (sResponse['msg']['withNewMsg'] == "yes") {
		// 	$('#cmb-bubbles-container').append(sResponse['msg']['newMsg']);
		// }

		// chatTime = chatTime + 1;

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