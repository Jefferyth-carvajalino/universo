import loadAdvisersCards from './advisers-list-script.js';

function getNews() {
	$.ajax({
		url: "/controller/news-controller.php",
		data: {
			req: "getNews",
		},
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sRes) {
		// console.log(JSON.stringify(sRes));

		if (sRes['res'] == "ok") {
			sRes['msg'].forEach(newItem => {
				$('#n-ab').append(`<div class="n-card"><div class="n-c-body"><div class="nc-icon"><img src="${newItem.img}" alt=""></div><div class="nc-text"><h5>${newItem.name}</h5><p>${newItem.description}</p></div><div class="nc-bt"><a href="/noticias/noticia/?id=${newItem.id}" id="btn-search"><span><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg></span><span>Ver más</span></a></div></div></div>`);
			});

		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: sRes['msg']
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
	});
}

(function () {
	getNews();
	loadAdvisersCards();
})();