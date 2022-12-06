const ADVISER_CONNECTION_STATUS = {
	CONNECTED: 1,
	DISCONNECTED: 0,
	BUSSY: 2
};

function getAdviser() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/advisers-controller.php",
			data: {
				req: "getAdviser",
				adviser: adviser,
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

function addReadToAdviser(dataToSend) {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "/controller/advisers-controller.php",
			data: {
				...dataToSend,
				req: "addReadToAdviser",
			},
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

		});
	});
}

function getCommentsHtml(comments = []) {
	if (comments.length === 0) {
		return '<h5>No hay comentarios sobre este asesor.</h5>';
	}

	return comments.map((comment) => {
		const starsHtml = generateStarsHtml(parseInt(comment.qualification));
		let qualification = 0;

		if (comment.qualification !== null) {
			qualification = comment.qualification;
		}

		return `<div class= "comment-item">
					<div class="comment-i-header">
						<div class="comment-qualification-container">
							${starsHtml}
						</div>
					</div>
					<div class="comment-i-body">
						<p class="comment-text">${(comment.comment !== null) ? comment.comment : ''}
						</p>

						<div class="comment-date-container">
							<p class="comment-date">${comment.created_at}</p>
						</div>
					</div>
					<div class="content-image-comment">
						<img src="${comment.image_customer}" alt="Imagen de usuario universo psiquico">
					</div>
				</div>`;
	});
}

let loadedOneTime = false;
const adviser = getUrlSearch("id");

export default async function main() {
	try {
		const {
			nickname,
			description,
			readings,
			image_profile_url,
			average,
			video_url,
			comments,
			price,
			online,
			years_working,
			image_customer
		} = await getAdviser();


		if (!loadedOneTime) {
			const readingsPlusOne = parseInt(readings) + 1;

			$('#adviser-img').attr("src", `${image_profile_url}`);
			$('#adviser-name').text(`${nickname}`);
			$('#readings').text(`${readingsPlusOne}`);
			$('#description').text(`${description}`);
			$('#years-working').text(`Asesor desde ${years_working}`);

			if (video_url != null) {
				$('#adviser-video').html(`<video src="${video_url}" controls width="100%" height="auto"></video>`);
			}

			$('.paginator-container').pagination({
				dataSource: comments,
				pageSize: 5,
				className: 'paginationjs-theme-blue',
				callback: function (data, pagination) {
					const html = getCommentsHtml(data);
					$('#comments-container').html(html);
				}
			});
			await addReadToAdviser({ id: adviser, readings: readingsPlusOne });
			loadedOneTime = true;
		}

		let averageRate = average;
		let averageRateStars = generateStarsHtml(parseInt(averageRate));
		$('.acs-i-container').html(averageRateStars);
		$('#average').text(`${average}`);

		const universoCost = 0.6;
		let adviserCost = universoCost + parseFloat(price);
		$('#price-per-minute').text(`$${adviserCost}`);

		$('#readings').text(`${readings} `);

		let adviserState = "";
		$('#adviser-state').removeClass("desconectado");
		$('#adviser-state').removeClass("conectado");
		$('#adviser-state').removeClass("ocupado");


		if (parseInt(online) === ADVISER_CONNECTION_STATUS.DISCONNECTED) {
			adviserState = "Desconectado";
			$('.go-to-chat').attr("href", "/log-in/");

		} else if ((parseInt(online) === ADVISER_CONNECTION_STATUS.CONNECTED) && ((user !== null) && (user.rol !== "adviser"))) {
			adviserState = "Conectado";
			$('.go-to-chat').attr("href", `/dashboard-consultor/chat/?adviser=${adviser}`);

		} else if (parseInt(online) === ADVISER_CONNECTION_STATUS.BUSSY) {
			adviserState = "Ocupado";
			$('.go-to-chat').attr("href", "/log-in/");
		}

		$('#adviser-state').text(adviserState);
		$('#adviser-state').addClass(adviserState.toLowerCase());

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

export {
	ADVISER_CONNECTION_STATUS,
	getAdviser,
	getCommentsHtml,
	addReadToAdviser,
};
