import loadAdvisersCards from "./advisers-list-script.js";

function getSpecialities() {
	$.ajax({
		url: "/controller/specialities-controller.php",
		data: {
			req: "getSpecialities",
		},
		method: "POST",
		dataType: "JSON",
		cache: false

	}).done(function (sRes) {
		// console.log(JSON.stringify(sRes));

		if (sRes['res'] == "ok") {
			sRes['msg'].forEach(specialityItem => {
				$('#e-ab').append(`<div class="e-card"><div class="e-c-body"><div class="ec-icon">${specialityItem.svg}</div><div class="ec-text"><h5>${specialityItem.name}</h5><p>${specialityItem.description}</p></div><div class="ec-bt"><a href="/especialidades/especialidad/?id=${specialityItem.id}" id="btn-search"><span><svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg></span><span>Ver más</span></a></div></div></div>`);

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
	getSpecialities();
	loadAdvisersCards();
})();