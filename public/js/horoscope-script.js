function getHoroscope() {

    const route = 'https://devdash.universopsiquico.com/api/getHoroscopos';
	$.ajax({
		url: route,
		method: "GET",
		dataType: "JSON",
		cache: false
	}).done(function ({data}) {
			data.forEach(horoscopeItem => {

				// $('#h-card-container').append(`<div class="h-card"><div class="dcard"><div><h6>${horoscopeItem.name}</h6><div><img src="${horoscopeItem.img}" alt=""></div></div><div><p>${horoscopeItem.date_range}</p></div></div><div class="card-content"><h6>${horoscopeItem.name}</h6><p><b>Planeta:</b> ${horoscopeItem.planet}</p><p><b>Elemento:</b> ${horoscopeItem.element}</p><p class="h-i-descript">${horoscopeItem.description}</p></div></div>`);
				$('#h-card-container').append(
					`<div class="h-card">
						<div>
							<div id="content-titel-horoscope">
								<h6>${horoscopeItem.name}</h6>
							</div>

							<div class="dcard">
								<img src="${horoscopeItem.img_front}" alt="">
							</div>

							<div class="card-content">
								<div>

									<p>
										<b>Planeta:</b> ${horoscopeItem.planet}
									</p>

									<p>
										<b>Elemento:</b> ${horoscopeItem.element}
									</p>

									<p>
										${horoscopeItem.description}
									</p>
								</div>
							</div>

							<div class="content-btn-hor">
								<a href="/dashboard-consultor/horoscopo/">¿Quieres mas información de tu horoscopo?</a>
							</div>
						</div>
					</div>`);
			});
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

getHoroscope();
