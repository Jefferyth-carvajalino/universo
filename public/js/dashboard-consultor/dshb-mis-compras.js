$('.actual-balance-container span').text(`$${parseFloat(user.total_amount_purchases)}`);

getCompras();

function getCompras() {
    const url = "https://devdash.universopsiquico.com/api/customer/getCompras";
	$.ajax({
		url,
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
		method: "GET",
		dataType: "JSON",
		cache: false
	}).done(function (sResponse) {

		if (sResponse['res'] == "ok") {
			$('#mis-compras-table-container').html(sResponse['msg']);

			$('#mis-compras-table').dataTable({
				responsive: true,
				language: {
					"processing": "Procesando...",
					"lengthMenu": "Mostrar _MENU_ Registros",
					"zeroRecords": "¡No se encontraron resultados!",
					"emptyTable": "¡La tabla está vacía!",
					"info": "_START_ al _END_ de _TOTAL_",
					"infoEmpty": "¡No hay datos para mostrar!",
					"infoFiltered": "(filtrado de un total de _MAX_ registros)",
					"infoPostFix": "",
					search: "_INPUT_",
					searchPlaceholder: "Buscar...",
					"thousands": ",",
					"loadingRecords": "Por Favor Espera - Cargando...",
					"paginate": {
						"first": "Primero",
						"last": "Último",
						"next": '<a href="#" class="waves-effect btn-flat nopadding"><i class="material-icons small">chevron_right</i></a>',
						"previous": '<a href="#" class="waves-effect btn-flat nopadding"><i class="material-icons small">chevron_left</i></a>'
					},
					"aria": {
						"sortAscending": ": Activar para ordenar la columna de manera ascendente",
						"sortDescending": ": Activar para ordenar la columna de manera descendente"
					}
				},
				order: [[0, "asc"]]
			});

		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: "Surgió un error interno"
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
		// $('.tooltipped').tooltip();
	});
}
