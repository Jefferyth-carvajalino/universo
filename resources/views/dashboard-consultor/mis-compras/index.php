<?php
session_start();

if (!isset($_SESSION['id_user']) && ($_SESSION['kind_user'] != "customer")) {
	header('Location: /log-in/');
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>Universo Psiquico - Mis compras</title>

	<link rel="stylesheet" href="/src/libs/DataTables/datatables.min.css">
	<link rel="stylesheet" href="/src/css/dshb-mis-compras-consultor.min.css">

	<!-- Global site tag (gtag.js) - Google Ads: 1003325170 -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=AW-1003325170"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'AW-1003325170');
	</script>
</head>

<body>
	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/header.php"; ?>

	<main class="dshb-main">
		<section id="s-dashboard">
			<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/dashboard-consultor/dshb-sidebar.html"; ?>

			<div class="dshb-content-container">
				<div id="mis-compras-container">
					<div class="dshb-title-container">
						<h4>MIS COMPRAS</h4>

						<p class="actual-balance-container">
							Saldo actual: <span></span> dolares

							<a href="/dashboard-consultor/mis-compras/" class="btn-refrescar-saldo">Refrescar</a>
						</p>
					</div>

					<div id="mc-table-box">
						<div class="material-table-container" id="mis-compras-table-container"></div>
					</div>

					<div id="btn-comprar-paq">
						<a href="/dashboard-consultor/paquetes/">
							<span>
								<img src="/src/img/dashboard/i-chat.svg" alt="">
							</span>
							<span>
								Comprar paquetes
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	</main>

	<!-- Scripts -->
	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/js/commons-script.html"; ?>

	<script>
		$('#btn-sidebar-actuator').click(function(e) {
			e.preventDefault();

			$('.dshb-sidebar').toggleClass("show");
		});
	</script>
	<script src="/src/libs/DataTables/datatables.min.js"></script>
	<script src="/src/js/dshb-commons-script.js"></script>
	<script src="/src/js/dashboard-consultor/dshb-mis-compras.js"></script>
</body>

</html>