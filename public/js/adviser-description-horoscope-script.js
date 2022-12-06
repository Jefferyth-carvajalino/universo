import main, { getAdviser, ADVISER_CONNECTION_STATUS } from "./adviser-description/utils.js";

main();

const DEFAULT_BIRTHDATE = "0000-00-00";
const ONE_DOLLAR = '1';
const adviser = getUrlSearch("id");

const ADDVISER_DATA = await getAdviser(adviser)

$('.request-horoscope').click(async function (e) {
	e.preventDefault();

	const { birth_date: birthDate, total_amount_purchases: userBalance, free_minutes } = user;
	console.log(birthDate);

	if (birthDate === DEFAULT_BIRTHDATE) {
		Swal.fire({
			icon: "warning",
			title: "Fecha de nacimiento requerida",
			text: "Debes actualizar tu fecha de nacimiento para solicitar tu horóscopo!",
			showCancelButton: true,
			confirmButtonText: "Actualizar",
			cancelButtonText: "Cancelar",
			reverseButtons: true,
		}).then(({ value }) => {
			if (value) window.location.href = "/dashboard-consultor/perfil/";
		});
	} else if (parseInt(userBalance) < parseInt(ONE_DOLLAR)) {
		Swal.fire({
			icon: "warning",
			title: "Dinero insuficiente",
			text: "Tu saldo actual es insuficiente para solicitar tu horóscopo!",
			showCancelButton: true,
			confirmButtonText: "Comprar",
			cancelButtonText: "Cancelar",
			reverseButtons: true,
		}).then(({ value }) => {
			if (value) window.location.href = "/dashboard-consultor/paquetes/";
		});
	} else if (parseInt(free_minutes) == "1") {
		Swal.fire({
			icon: "warning",
			title: "opps",
			text: "Para poder saber mas de tu horóscopo recarga tu cuenta!",
			showCancelButton: true,
			confirmButtonText: "Comprar",
			cancelButtonText: "Cancelar",
			reverseButtons: true,
		}).then(({ value }) => {
			if (value) window.location.href = "/dashboard-consultor/paquetes/";
		});
	} else if (parseInt(ADDVISER_DATA['online']) !== ADVISER_CONNECTION_STATUS.CONNECTED) {
		Swal.fire({
			icon: "warning",
			title: "Asesor desconectado",
			text: "intenta mas tarde ó prueba con otro asesor!",
			showCancelButton: true,
			confirmButtonText: "Asesores",
			cancelButtonText: "Cancelar",
			reverseButtons: true,
		}).then(({ value }) => {
			if (value) window.location.href = "/dashboard-consultor/horoscopo/";
		});
	} else {
		$.ajax({
			url: "/controller/horoscope-requests-controller.php",
			data: {
				req: "createHoroscopeRequests",
				adviserId: adviser,
				customerId: user.id,
			},
			method: "POST",
			dataType: "JSON",
			cache: false
		}).done(function (sResponse) {
			if (sResponse['res'] == "ok") {
				Swal.fire({
					icon: "success",
					title: "Solicitud enviada",
					text: "pronto tendras tu respuesta!",
					confirmButtonText: "ok",
				}).then(({ value }) => {
					if (value) window.location.href = "/dashboard-consultor/mi-horoscopo/";
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

		});
	}
});