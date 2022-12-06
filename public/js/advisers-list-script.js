const UNIVERSO_COST = 0.6;

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

function generateAdvisersCards(universoCost, advisers = []) {
	return advisers.map(({ adviser_id, image_profile_url, nickname, average, readings, price, online, years_working }) => {
		const starsHtml = generateStarsHtml(parseInt(average));
		let adviserCost = universoCost + parseFloat(price);

		let adviserState = "";
		let adviserStateClass = "";

		if (parseInt(online) === 0) {
			adviserState = "Desconectado";
			adviserStateClass = "desconectado";

		} else if (parseInt(online) === 1) {
			adviserState = "Conectado";
			adviserStateClass = "conectado";

		} else if (parseInt(online) === 2) {
			adviserState = "Ocupado";
			adviserStateClass = "ocupado";
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
					<p id="adviser-state" class="${adviserStateClass}">${adviserState}</p>
				</div>
				<div class="ac-footer">
					<p>Asesor desde ${years_working}</p>
				</div>
			</a>`;
	});
}

function renderCards(advisers) {
	$('#advisers-box').html("");

	$('.paginator-container').pagination({
		dataSource: advisers,
		pageSize: 8,
		className: 'paginationjs-theme-blue',
		callback: function (data, pagination) {
			const html = generateAdvisersCards(UNIVERSO_COST, data);
			const adviserBox = $('#advisers-box');
			adviserBox.html(html);
		}
	});
}

async function filterAdvisers(searchWord) {
	const advisers = await getAdvisers();
	console.log('Advisers: ', advisers);
	let searchedAdvisers = advisers.filter(function ({ nickname }) {
		return nickname.toLowerCase().indexOf(searchWord.toLowerCase()) > -1;
	});

	renderCards(searchedAdvisers);
}

function adviserInFirstPosition(arrayToModify, adviserToChangeId) {
	let advisers = [...arrayToModify];
	const adviserToChange = advisers.find(({ adviser_id }) => adviser_id === adviserToChangeId);

	if (adviserToChange) {
		const adviserToRemoveIndex = advisers.findIndex(({ adviser_id }) => adviser_id === adviserToChangeId);
		advisers.splice(adviserToRemoveIndex, 1);
		advisers.unshift(adviserToChange);
	}

	return advisers;
}

export default async function loadAdvisersCards() {
	try {
		const ESMERALDA_ID = "19";

		const advisers = await getAdvisers();
		advisers.sort(() => (Math.round(Math.random()) - 0.5));

		const advisersFixed = adviserInFirstPosition(advisers, ESMERALDA_ID);

		renderCards(advisersFixed);

	} catch (error) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: error
		});
	}
}

(function () {
	loadAdvisersCards();
})();

$('#search-adviser-input').keyup(function () { $('#search-adviser-form').submit(); });

$('#search-adviser-form').submit(function (e) {
	e.preventDefault();
	const searchWord = $('#search-adviser-input').val();
	if (searchWord !== "" && searchWord !== " ") {
		filterAdvisers(searchWord);
	} else {
		loadAdvisersCards();
	}
});

export {
	getAdvisers,
	generateAdvisersCards,
}