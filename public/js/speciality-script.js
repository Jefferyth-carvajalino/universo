const specialityId = getUrlSearch("id");

function getSpeciality() {
	$.ajax({
		url: "/controller/specialities-controller.php",
		data: {
			req: "getSpecialityItem",
			speciality: specialityId,
		},
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sRes) {
		console.log(JSON.stringify(sRes));

		if (sRes['res'] == "ok") {

			$('#title').html(`<span>${sRes['msg']['svg']}</span>${sRes['msg']['name']}`);
			$('#description').text(`${sRes['msg']['description']}`);
			$('#img-bg-container').html(`<img class="seccion-image" src="${sRes['msg']['img']}" alt="${sRes['msg']['name']}">`);

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

getSpeciality();