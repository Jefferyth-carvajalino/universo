<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Universo Psiquico - Descripción de especialistas</title>
	<link rel="stylesheet" href="/src/libs/pagination/pagination.min.css">
	<link rel="stylesheet" href="/src/css/descripcion-especialista.min.css">

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
		<section id="s-d-e">
			<div id="b-d-e">
				<div id="img-d-e">
					<h3>
						<span>
							<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/img/index/i-e-amor.html"; ?>
						</span>
						Psíquico
					</h3>
					<div class="asesor-card">
						<div class="ac-body">
							<img src="/src/img/user-default.png" alt="" id="adviser-img">
							<h6 id="adviser-name"></h6>
							<div class="ac-score-container">
								<div class="acs-container">
									<div class="acs-n-container">
										<span id="average"></span>
									</div>
									<div class="acs-i-container">
										<!-- <span class="checked">
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
												<path fill="#474b63"
													d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
												</path>
											</svg>
										</span>
										<span class="checked">
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
												<path fill="#474b63"
													d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
												</path>
											</svg>
										</span>
										<span class="checked">
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
												<path fill="#474b63"
													d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
												</path>
											</svg>
										</span>
										<span class="checked">
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
												<path fill="#474b63"
													d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
												</path>
											</svg>
										</span>
										<span class="checked">
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
												<path fill="#474b63"
													d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
												</path>
											</svg>
										</span> -->
									</div>
								</div>
							</div>
							<p class="readings-and-price">
								<span>
									<b id="readings"></b> Lecturas
								</span>
								<span>|</span>
								<span>
									<b id="price-per-minute"></b> USD/min
								</span>
							</p>
							<p id="adviser-state">
							</p>
						</div>
						<div class="ac-footer">
							<p id="years-working">
								Asesor desde 2020
							</p>
						</div>
					</div>
				</div>
				<div id="text-d-e">
					<div>
						<div class="buy-package-btn-container">
							<button class="request-horoscope">Conoce mas de tu horóscopo</button>
						</div>
						<h4>Sobre mi</h4>
						<p id="description"></p>
						<div class="av-container" id="adviser-video">
						</div>
						<div class="buy-package-btn-container">
							<button class="request-horoscope">Conoce mas de tu horóscopo</button>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="section-adviser-comments">
			<h3>Comentarios y puntuación del asesor</h3>
			<div id="comments-container">
				<!-- <div class="comment-item">
					<div class="comment-i-header">
						<div class="comment-qualification-container">
							<span class="checked">
								<svg style="width:24px;height:24px" viewBox="0 0 24 24">
									<path fill="#252947" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
									</path>
								</svg>
							</span>
							<span class="checked">
								<svg style="width:24px;height:24px" viewBox="0 0 24 24">
									<path fill="#252947" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
									</path>
								</svg>
							</span>
							<span class="checked">
								<svg style="width:24px;height:24px" viewBox="0 0 24 24">
									<path fill="#252947" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
									</path>
								</svg>
							</span>
							<span class="checked">
								<svg style="width:24px;height:24px" viewBox="0 0 24 24">
									<path fill="#252947" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
									</path>
								</svg>
							</span>
							<span class="checked">
								<svg style="width:24px;height:24px" viewBox="0 0 24 24">
									<path fill="#252947" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
									</path>
								</svg>
							</span>
						</div>
					</div>
					<div class="comment-i-body">
						<p class="comment-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
						</p>

						<div class="comment-date-container">
							<p class="comment-date">20-05-1995</p>
						</div>
					</div>
					<div class="content-image-comment">
						<img src="/src/img/customers/test.png" alt="">
					</div>
				</div> -->
			</div>
			<div class="paginator-container">
			</div>
		</section>
	</main>
	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/footer.php"; ?>
	<!-- Scripts -->
	<script src="https://www.google.com/recaptcha/api.js?render=6Lfhl9IZAAAAAA5iSF520_ou02EL2zI6xVgxUQm7"></script>
	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/js/commons-script.html"; ?>
	<script src="/src/libs/owl-carousel/owl.carousel.min.js"></script>
	<script src="/src/libs/pagination/pagination.min.js"></script>
	<script type="module" src="/src/js/adviser-description-horoscope-script.js"></script>
</body>

</html>