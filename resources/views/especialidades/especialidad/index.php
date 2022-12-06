<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>Universo Psiquico - Astrología</title>

	<link rel="stylesheet" href="/src/libs/owl-carousel/owl.carousel.min.css">
	<link rel="stylesheet" href="/src/libs/owl-carousel/owl.theme.default.min.css">
	<link rel="stylesheet" href="/src/css/item-especialidad.min.css">

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

	<main>
		<section id="s-top">
			<div>
				<h3 id="title">
					<span>
						<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/img/index/i-e-astrologia.html"; ?>
					</span>
					Astrologia
				</h3>

				<p id="description">
					A través de todas las culturas, siempre se ha notado el gusto e interés por
					temas como las posiciones de los astros y cómo afectan el psiquis del ser
					humano, la ASTROLOGÍA es una herramienta milenaria que data desde años
					atrás del comienzo de nuestra era cristiana, desde los antiguos filósofos y el
					crecimiento de ciencias como la geometría, la matemática, la medicina, filosofía
					entre otras, las civilizaciones ancestrales siempre tenían muy presente los
					cambios planetarios en sus decisiones de modo de vida, en sus cultivos,
					iniciaciones, y calendarios.
				</p>
			</div>

			<div id="img-bg-container">
				<img class="seccion-image" src="/src/img/especialidades/astrologia.png" alt="Astrología">
			</div>
		</section>
	</main>

	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/footer.php"; ?>

	<!-- Scripts -->
	<script src="https://www.google.com/recaptcha/api.js?render=6Lfhl9IZAAAAAA5iSF520_ou02EL2zI6xVgxUQm7"></script>
	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/js/commons-script.html"; ?>
	<script src="/src/js/speciality-script.js"></script>
</body>

</html>