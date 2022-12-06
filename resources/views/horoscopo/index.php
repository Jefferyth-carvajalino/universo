<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Universo Psiquico - Horóscopo</title>
	<link rel="stylesheet" href="/src/libs/owl-carousel/owl.carousel.min.css">
	<link rel="stylesheet" href="/src/libs/owl-carousel/owl.theme.default.min.css">
	<link rel="stylesheet" href="/src/css/horoscopo.min.css">
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
				</h3>
			</div>

			<div class="aintro-container">
				<div>
					<h3>Horóscopo</h3>
					<p>
						Con cada signo podemos saber las energías que están fluyendo en cada momento, pero profundizando
						un poco
						más, nos damos cuenta de cómo los astros influyen en nuestra personalidad y nos vamos a sentir
						identificados con nuestro signo solar. <br> El ideal del horóscopo es poder saber qué energías
						están influyendo en cada uno en el momento preciso para saber que es favorable y que no es favorable en planos como negocios, amor, empleos,
						familia, salud, entre otros. Las posiciones de los astros afectan nuestra psiquis, si nosotros colocamos cuidado
						a todas nuestras vivencias y analizamos las posiciones de los astros podemos darnos cuenta que si existe
						una influencia que no nos damos cuenta pero que existen.
					</p>
				</div>
			</div>

			<div class="ab-container" id="h-ab">
				<div id="h-card-container">
					<!-- <div class="h-card">
						<div>
							<div id="content-titel-horoscope">
								<h6>Aries</h6>
							</div>

							<div class="dcard">
								<img src="/src/img/horoscopo/horoscopo-front/aries.svg" alt="">
							</div>

							<div class="card-content">

								<p>
									<b>Planeta:</b> Marte
								</p>

								<p>
									<b>Elemento:</b> Fuego
								</p>

								<p>
									Para los aries tenemos una muy bella energía donde encontrarás sentido a tu nivel del amor encontrarás un diálogo con tu pareja y podrás estar en un equilibrio con tu ser interno a nivel económico necesitas un poco de luz coloca una vela verde para activar tu energía-
								</p>
							</div>

							<div class="content-btn-hor">
								<a href="#">Ver mas</a>
							</div>
						</div>
					</div> -->
				</div>
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
	<script src="/src/js/horoscope-script.js"></script>
	<script src="/src/libs/pagination/pagination.min.js"></script>
	<script type="module" src="/src/js/advisers-list-script.js"></script>
</body>

</html>