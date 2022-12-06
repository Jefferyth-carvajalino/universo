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

	<link rel="stylesheet" href="/src/css/dshb-buscar-asesor.min.css">
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

	<main class="dshb-main">
		<section id="s-dashboard">
			<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/dashboard-consultor/dshb-sidebar.html"; ?>

			<div class="dshb-content-container">
				<div id="ba-container">
					<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/advisers-list.php"; ?>
					<!-- <div id="buscar-asesor-box">
						<div class="na-head">
							<h2>Nuestros asesores</h2>

							<ul class="na-tabs">
								<li>
									<a href="#" class="active">
										Destacados
									</a>
								</li>
							</ul>

							<div class="na-sbox-container">
								<form>
									<a href="#" id="btn-search">
										<span>
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
												<path fill="#00e5e5" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
											</svg>
										</span>

										<span>
											buscar
										</span>
									</a>

									<input type="text" id="search-adviser-input">
								</form>
							</div>
						</div>

						<div class="na-body" id="advisers-box">
							<a href="/dashboard-consultor/chat/?adviser=1" class="asesor-card">
									<div class="ac-body">
										<img src="/src/img/asesores/lucero.png" alt="">

										<h6>Lucero</h6>

										<div class="ac-score-container">
											<div class="acs-container">
												<div class="acs-n-container">
													<span>
														5
													</span>
												</div>

												<div class="acs-i-container">
													<span class="checked">
														<svg style="width:24px;height:24px" viewBox="0 0 24 24">
															<path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
														</svg>
													</span>

													<span class="checked">
														<svg style="width:24px;height:24px" viewBox="0 0 24 24">
															<path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
														</svg>
													</span>

													<span class="checked">
														<svg style="width:24px;height:24px" viewBox="0 0 24 24">
															<path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
														</svg>
													</span>

													<span class="checked">
														<svg style="width:24px;height:24px" viewBox="0 0 24 24">
															<path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
														</svg>
													</span>

													<span class="checked">
														<svg style="width:24px;height:24px" viewBox="0 0 24 24">
															<path fill="#474b63" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
														</svg>
													</span>
												</div>
											</div>
										</div>

										<p>
											<b>0</b> lecturas
										</p>
									</div>

									<div class="ac-footer">
										<p>
											Asesor desde 2020
										</p>
									</div>
								</a>
						</div>
					</div> -->
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
	<script src="/src/js/dshb-commons-script.js"></script>
	<script src="/src/libs/pagination/pagination.min.js"></script>
	<script type="module">
		import loadAdvisersCards from '../../src/js/advisers-list-script.js';
		(function() {
			loadAdvisersCards();
		})();
	</script>
</body>

</html>