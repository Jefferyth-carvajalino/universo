function getAdviserProfits() {
    return new Promise((resolve, reject) => {

        $.ajaxSetup({
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
       });

        const url = "https://devdash.universopsiquico.com/api/advicer/getAdviserProfits";
        $.ajax({
            url,
            method: "GET",
            dataType: "JSON",
            cache: false

        }).done(function (sResponse) {
            if (sResponse['res'] == "ok") {
                resolve(sResponse['data']);
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

async function main() {
    try {
        const adviserProfit = await getAdviserProfits();
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        if (adviserProfit.length !== 0) {
            const adviserProfitPerChat = adviserProfit.map(row => parseFloat(row.adviser_profit));
            $('.actual-balance-container span').text(adviserProfitPerChat.reduce(reducer));
        } else {
            $('.actual-balance-container span').text("0");
        }

        $('#mis-ganancias-table').DataTable({
            responsive: true,
            language: {
                "processing": "Cargando información...",
                "lengthMenu": "Mostrar _MENU_ filas",
                "zeroRecords": "¡Aún no tienes ingresos!",
                "emptyTable": "¡Aún no tienes ingresos!",
                "info": "Del _START_ al _END_ , Total: _TOTAL_",
                "infoEmpty": "¡No hay datos para mostrar!",
                "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                "infoPostFix": "",
                search: "_INPUT_",
                searchPlaceholder: "Buscar...",
                "thousands": ",",
                "loadingRecords": "Por Favor Espera - Cargando información...",
                "paginate": {
                    "first": "Primero",
                    "last": "Último",
                    "next": 'Anterior',
                    "previous": 'Siguiente'
                },
                "aria": {
                    "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                    "sortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            },
            data: adviserProfit,
            columns: [
                { data: "id" },
                { data: "duration_time" },
                {
                    data: function (row) {
                        const starsHtml = generateStarsHtml(parseInt(row.qualification));
                        const starsColumn = `<div class="acs-i-container">${starsHtml}</div>`
                        return starsColumn;
                    }
                },
                { data: "created_at" },
                {
                    data: function (row) {
                        return `$${row.adviser_profit} USD`
                    }
                },
                {
                    data: function (row) {
                        return (parseInt(row.payed_status) === 0) ? '<div style="padding: 7px 20px; color: #ffffff; background-color: red; border-radius: 4px;">Sin pagar</div>' : '<div style="padding: 7px 20px; color: #ffffff; background-color: green; border-radius: 8px;">Pagado</div>';
                    }
                }
            ]
        });

    } catch (error) {
        console.error(error);

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Lo sentimos, ha surgido un error. Intentalo más tarde."
        });
    }
}

main();

