let advisers = [];

function getAdvisers() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/advisers-controller.php",
			data: {
				req: "getAdvisers",
			},
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

function generateAdvisersHtml(universoCost, advisers = []) {
	return advisers.map(({ adviser_id, image_profile_url, nickname, average, readings, price, online }) => {
		const starsHtml = generateStarsHtml(parseInt(average));
		let adviserCost = universoCost + parseFloat(price);
		let adviserState = "";

		if (parseInt(online) === 0) {
			adviserState = "Desconectado";

		} else if (parseInt(online) === 1) {
			adviserState = "Conectado";

		} else if (parseInt(online) === 2) {
			adviserState = "Ocupado";
		}

		return `<a href="/descripcion-especialista/?id=${adviser_id}" class="asesor-card">
				<div class="ac-body">
					<img src="${image_profile_url}" alt="">
					<h6>${nickname}</h6>
					<div class="ac-score-container">
						<div class="acs-container">
							<div class="acs-n-container">
								<span>${average}</span>
							</div>
							<div class="acs-i-container">
								${starsHtml}
							</div>
						</div>
					</div>
					<p class="readings-and-price">
						<span>
							<b class="readings">${readings}</b>
							lecturas
						</span>
						<span>|</span>
						<span><b class="price-per-minute">$${adviserCost}</b> USD/min</span>
					</p>
					<p class="adviser-state ${adviserState.toLowerCase()}">${adviserState}</p>
				</div>
				<div class="ac-footer">
					<p>Asesor desde 2020</p>
				</div>
			</a>`;
	});
}

async function main() {
	try {
		const universoCost = 0.6;
		advisers = await getAdvisers();
		$('#advisers-box').html(generateAdvisersHtml(universoCost, advisers));

		setTimeout(function () {
			main();
		}, 1000);

	} catch (error) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: error
		});
	}
}
main();

$('#search-adviser-input').keyup(function (e) {
	let searchWord = $(this).val();
	let searchedAdvisers = advisers.filter(function (adviser) {
		return adviser.nickname.toLowerCase().indexOf(searchWord.toLowerCase()) > -1;
	});

	$('#advisers-box').html("");

	if (searchWord == "") {
		advisers.forEach(adviser => {
			$('#advisers-box').append(`<a href="/dashboard-consultor/chat/?adviser=${adviser.id}" class="asesor-card"><div class="ac-body"><img src="${adviser.image_profile_url}" alt=""><h6>${adviser.nickname}</h6><div class="ac-score-container"><div class="acs-container"><div class="acs-n-container"><span>${adviser.average}</span></div><div class="acs-i-container"><span class="checked"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg></span><span class="checked"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg></span><span class="checked"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg></span><span class="checked"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg></span><span class="checked"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg></span></div></div></div><p><b>${adviser.readings}</b> lecturas</p></div><div class="ac-footer"><p>Asesor desde 2020</p></div></a>`);
		});

	} else {
		searchedAdvisers.forEach(adviser => {
			$('#advisers-box').append(`<a href="/dashboard-consultor/chat/?adviser=${adviser.id}" class="asesor-card"><div class="ac-body"><img src="${adviser.image_profile_url}" alt=""><h6>${adviser.nickname}</h6><div class="ac-score-container"><div class="acs-container"><div class="acs-n-container"><span>${adviser.average}</span></div><div class="acs-i-container"><span class="checked"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg></span><span class="checked"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg></span><span class="checked"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg></span><span class="checked"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg></span><span class="checked"><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg></span></div></div></div><p><b>${adviser.readings}</b> lecturas</p></div><div class="ac-footer"><p>Asesor desde 2020</p></div></a>`);
		});
	}
});
