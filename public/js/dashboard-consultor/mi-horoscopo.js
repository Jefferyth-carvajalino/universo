
function getHoroscopeRequestsBycustomerId() {
    const url = "https://devdash.universopsiquico.com/api/customer/getHoroscopeRequestsByCustomerId"
	$.ajax({
		url,
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
		method: "GET",
		dataType: "JSON",
		cache: false
	}).done(function (sResponse) {
        console.log(sResponse)
		if (sResponse['res'] == "ok") {
			if ((sResponse['msg']).length <= 0) {
				$('#horoscope-container').append("<h2 class='text-center'>No hay horóscopos pendientes</h2>");
			} else {
				localStorage.setItem('HoroscopesToAnswer', JSON.stringify(sResponse['msg']));
				console.log(sResponse['msg']);
				sResponse['msg'].forEach(horoscope => {
					$('#horoscope-container').append(`
					<div class="content-solicitud-horoscope">
						<span>
							<span>
								ASESOR:
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
								${horoscope.message}
							</span>
						</span>

						<span>
							<span>
								FECHA:
							</span>
							<span>
								${horoscope.created_at}
							</span>
						</span>
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

getHoroscopeRequestsBycustomerId();
