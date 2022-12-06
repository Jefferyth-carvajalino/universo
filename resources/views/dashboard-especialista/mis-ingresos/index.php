<?php
session_start();

if (!isset($_SESSION['id_user']) && ($_SESSION['kind_user'] != "adviser")) {
	header('Location: /log-in/');
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Universo Psiquico - Mis ingresos</title>
	<link rel="stylesheet" href="/src/libs/DataTables/datatables.min.css">
	<link rel="stylesheet" href="/src/css/dshb-mis-ingresos-especialista.min.css">

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
			<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/dashboard-especialista/dshb-sidebar.php"; ?>
			<div class="dshb-content-container">
				<div id="mis-ingresos-container">
					<div class="dshb-title-container">
						<h4>MIS INGRESOS</h4>
						<p class="actual-balance-container">
							Total: $<span></span> USD
						</p>
					</div>
					<div id="mc-table-box">
						<div class="material-table-container" id="mis-ganancias-table-container">
							<table id="mis-ganancias-table">
								<thead>
									<tr>
										<th>Id</th>
										<th>Duración</th>
										<th>Calificación</th>
										<th>Fecha</th>
										<th>Ingreso</th>
										<th>Estado del pago</th>
									</tr>
								</thead>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	<!-- Scripts -->
	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/js/commons-script.html"; ?>
	<script src="/src/libs/DataTables/datatables.min.js"></script>
	<script>
		$('#menu-btn').click(function(e) {
			e.preventDefault();

			if ($('header').hasClass("extended")) {
				$('header').removeClass("extended");

			} else {
				$('header').addClass("extended");
			}

		});

		$('#btn-sidebar-actuator').click(function(e) {
			e.preventDefault();

			$('.dshb-sidebar').toggleClass("show");
		});
	</script>
	<script src="/src/js/dshb-commons-script.js"></script>
	<script src="/src/js/dashboard-especialista/mis-ingresos.js"></script>
</body>

</html>