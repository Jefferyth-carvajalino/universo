console.log("entra new");
const newId = getUrlSearch("id");

function getNew() {
	 const route = `https://devdash.universopsiquico.com/api/news?id=${newId}`;
	$.ajax({
		url: route,
		method: "GET",
		dataType: "JSON",
		cache: false

	}).done(function (data) {

		let noticia = data.data[0]

		console.log("noticia", noticia);

		$('#new-html-container').html(`${noticia['html']}`);
		$('#new-img').html(`<img src="${noticia['img']}" alt="${noticia['name']}">`);
		// if (sRes['res'] == "ok") {

		// } else {
		// 	Swal.fire({
		// 		icon: 'error',
		// 		title: 'Oops...',
		// 		text: new
		// 	});
		// }

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

getNew();