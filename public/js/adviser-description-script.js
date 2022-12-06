import main from "./adviser-description/utils.js";

main();

$('.go-to-chat').click(async function (e) {
	e.preventDefault();

	if (user !== null) {
		if (parseInt(user.total_amount_purchases, 10) > 0) {
			window.location.href = $(this).attr('href');
		} else {
			await Swal.fire({
				icon: 'error',
				title: 'Saldo insuficiente!',
				text: "Tu saldo es insuficiente. Para continuar con la conversación, recarga tu saldo."
			});
			window.location.href = "/dashboard-consultor/paquetes/";
		}
	} else {
		window.location.href = "/log-in/";
	}

})