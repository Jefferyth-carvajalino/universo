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

	<title>Universo Psiquico - Horóscopo</title>

	<link rel="stylesheet" href="/src/libs/dropify/css/dropify.min.css">
	<link rel="stylesheet" href="/src/css/dshb-horoscopo-especialista.min.css">

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

	<div class="popup" id="answer-horoscope-popup">
		<div class="popup-container">
			<button class="btn-close-popup" id="btn-close-popup-answer-horoscope">
				<svg style="width:28px;height:28px" viewBox="0 0 24 24">
					<path fill="#1173a1" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
				</svg>
			</button>
			<div class="popup-content">
				<div>
					<span>
						<span>
							NOMBRE:
						</span>
						<span id="popup-name">
							Pepito perez
						</span>
					</span>

					<span>
						<span>
							FECHA DE NACIMIETO:
						</span>
						<span id="popup-date">
							1998-05-24
						</span>
					</span>

					<span>
						<span>
							SIGNO:
						</span>
						<span id="popup-sign">
							Géminis
						</span>
					</span>
				</div>

				<div>
					<textarea id="text-answer-horoscope" placeholder="Responder Horoscopo"></textarea>
				</div>

				<div id="content-btn-popup-answerhor">
					<a href="#" id="btn-send-answer-horoscope">Enviar</a>
				</div>
			</div>
		</div>
	</div>

	<main class="dshb-main">
		<section id="s-dashboard">
			<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/dashboard-especialista/dshb-sidebar.php"; ?>

			<div class="dshb-content-container">
				<h4>Lista de horóscopos pendientes</h4>
				<div id="horoscope-container">
					<!-- <div class="content-solicitud-horoscope">
						<span>
							<span>
								NOMBRE:
							</span>
							<span>
								Pepito perez
							</span>
						</span>

						<span>
							<span>
								FECHA DE NACIMIETO:
							</span>
							<span>
								1998-05-24
							</span>
						</span>

						<span>
							<span>
								SIGNO:
							</span>
							<span>
								Géminis
							</span>
						</span>
						<div class="content-btn-res-hor">
							<a href="#">Responder</a>
						</div>
					</div> -->
				</div>
			</div>
		</section>
	</main>


	<!-- Scripts -->
	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/js/commons-script.html"; ?>
	<?php //include_once $_SERVER["DOCUMENT_ROOT"] . "/src/js/firebase-notification.html";
	?>
	<script>
		$('#btn-sidebar-actuator').click(function(e) {
			e.preventDefault();

			$('.dshb-sidebar').toggleClass("show");
		});
	</script>
	<script src="/src/libs/dropify/js/dropify.min.js"></script>
	<script src="/src/js/general-functions.js"></script>
	<script src="/src/js/dshb-commons-script.js"></script>
	<script src="/src/js/dashboard-especialista/horoscopo-script.js"></script>
</body>

</html>