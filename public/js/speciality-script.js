const specialityId = getUrlSearch("id");

function getSpeciality() {
	 const route = `https://devdash.universopsiquico.com/api/specialities?id=${specialityId}`;
	$.ajax({
		url: route,
		method: "GET",
		dataType: "JSON",
		cache: false

	}).done(function (data) {

		let especialidad = data.data[0]

		console.log("especialidad",especialidad);


		$('#title').html(`<span>${especialidad.svg}</span>${especialidad.name}`);
		$('#description').text(`${especialidad['description']}`);
		$('#img-bg-container').html(`<img class="seccion-image" src="${especialidad['img']}" alt="${especialidad['name']}">`);
		

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

getSpeciality();