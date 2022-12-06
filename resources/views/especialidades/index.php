<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>Universo Psiquico - Especialidades</title>

	<link rel="stylesheet" href="/src/libs/owl-carousel/owl.carousel.min.css">
	<link rel="stylesheet" href="/src/libs/owl-carousel/owl.theme.default.min.css">
	<link rel="stylesheet" href="/src/css/especialidades.min.css">
	<link rel="stylesheet" href="/src/libs/pagination/pagination.min.css">

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
		<section class="asc">
			<div class="at-container">
				<h3 class="seccion-title">
					<span>
						<svg style="width:24px;height:24px" viewBox="0 0 24 24">
							<path fill="#00e5e5" d="M20,11H4V8H20M20,15H13V13H20M20,19H13V17H20M11,19H4V13H11M20.33,4.67L18.67,3L17,4.67L15.33,3L13.67,4.67L12,3L10.33,4.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V3L20.33,4.67Z" />
						</svg>
					</span>
					Especialidades
				</h3>
			</div>

			<div class="ab-container" id="e-ab">
				<!-- <div class="e-card">
						<div class="e-c-body">
							<div class="ec-icon">
								<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/img/index/i-e-astrologia.html"; ?>
							</div>

							<div class="ec-text">
								<h5>Astrología </h5>

								<p>
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

							<div class="ec-bt">
								<a href="/especialidades/astrologia/" id="btn-search">
									<span>
										<svg style="width:24px;height:24px" viewBox="0 0 24 24">
											<path fill="#ffffff" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
										</svg>
									</span>

									<span>
										Ver más
									</span>
								</a>
							</div>
						</div>
					</div> -->
			</div>
		</section>

		<section class="s-al">
			<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/advisers-list.php"; ?>
		</section>
	</main>

	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/footer.php"; ?>


	<!-- Scripts -->
	<script src="https://www.google.com/recaptcha/api.js?render=6Lfhl9IZAAAAAA5iSF520_ou02EL2zI6xVgxUQm7"></script>
	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/js/commons-script.html"; ?>
	<script src="/src/libs/owl-carousel/owl.carousel.min.js"></script>
	<script src="/src/libs/pagination/pagination.min.js"></script>
	<script type="module" src="/src/js/specialities-general-script.js"></script>
</body>

</html>