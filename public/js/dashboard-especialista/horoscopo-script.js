let HoroscopesToAnswer;

setInterval(() => {
	$("#horoscope-container").html("");
	getHoroscopeRequestsByAdviserId();
	console.log("entra ");
}, 5000);

function getHoroscopeRequestsByAdviserId() {
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
			if ((sResponse['msg']).length <= 0) {
				$('#horoscope-container').append("<h2 class='text-center'>No hay horóscopos pendientes</h2>");
			} else {
				localStorage.setItem('HoroscopesToAnswer', JSON.stringify(sResponse['msg']));
				sResponse['msg'].forEach(horoscope => {
					$('#horoscope-container').append(`
					<div class="content-solicitud-horoscope">
						<span>
							<span>
								NOMBRE:
							</span>
							<span>
								${horoscope.nickname}
							</span>
						</span>
	
						<span>
							<span>
								FECHA DE NACIMIETO:
							</span>
							<span>
								${horoscope.birth_date}
							</span>
						</span>
	
						<span>
							<span>
								SIGNO:
							</span>
							<span>
								${horoscope.zodiac}
							</span>
						</span>
						<div class="content-btn-res-hor">
							<a href="#" onclick="responseHoroscope(${horoscope.horoscopeId})">Responder</a>
						</div>
					</div>
				`);
				});
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


function responseHoroscope(HoroscopeId) {
	$("#answer-horoscope-popup").addClass('showing');

	HoroscopesToAnswer = JSON.parse(localStorage.getItem("HoroscopesToAnswer")).find(horoscope => horoscope.horoscopeId == HoroscopeId);

	$("#popup-name").text(HoroscopesToAnswer.nickname);
	$("#popup-date").text(HoroscopesToAnswer.birth_date);
	$("#popup-sign").text(HoroscopesToAnswer.zodiac);
}

$("#btn-close-popup-answer-horoscope").click(function (e) {
	e.preventDefault();
	$("#answer-horoscope-popup").removeClass('showing');
	$("#text-answer-horoscope").val("");
});

$("#btn-send-answer-horoscope").click(function (e) {
	e.preventDefault();

	let textAnswerHor = $("#text-answer-horoscope").val();

	if (textAnswerHor == "") {
		notificacion("#text-answer-horoscope", "Ingresa texto del horóscopo", "#text-answer-horoscope", "bottom center", "error");
	} else {
		$.ajax({
			url: "/controller/horoscope-requests-controller.php",
			data: {
				req: "updateHoroscopeRequestsMessage",
				horoscopeRequestId: HoroscopesToAnswer.horoscopeId,
				textAnswerHor
			},
			method: "POST",
			dataType: "JSON",
			cache: false
		}).done(function (sResponse) {
			if (sResponse['res'] == "ok") {
				$("#horoscope-container").html("");
				getHoroscopeRequestsByAdviserId();
				$("#answer-horoscope-popup").removeClass('showing');
				$("#text-answer-horoscope").val("");

				let countH = localStorage.getItem("countHoroscope");
				localStorage.setItem("countHoroscope", parseInt(countH) - 1);
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
});

getHoroscopeRequestsByAdviserId();