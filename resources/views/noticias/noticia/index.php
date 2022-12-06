<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>Universo Psiquico - Blog</title>

	<link rel="stylesheet" href="/src/css/item-noticia.min.css">

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
		<section class="nsc">
			<div id="new-img">
				<!-- <img src="/src/img/noticias/super-luna-abril.png" alt=""> -->
			</div>
			<div>
				<!-- <h3 id="new-name"></h3> -->

				<div id="new-html-container"></div>
			</div>
		</section>
	</main>

	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/footer.php"; ?>

	<!-- Scripts -->
	<script src="https://www.google.com/recaptcha/api.js?render=6Lfhl9IZAAAAAA5iSF520_ou02EL2zI6xVgxUQm7"></script>
	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/js/commons-script.html"; ?>
	<script src="/src/libs/jquery/jQuery.min.js"></script>
	<script src="/src/js/noticia-script.js"></script>
</body>

</html>