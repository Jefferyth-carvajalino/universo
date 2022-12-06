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

	<title>Universo Psiquico - Perfil</title>

	<link rel="stylesheet" href="/src/libs/dropify/css/dropify.min.css">
	<link rel="stylesheet" href="/src/css/dshb-perfil-especialista.min.css">

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
				<div id="perfil-container">
					<div>
						<div id="information-account-container">
							<h5>PERFIL</h5>

							<form>
								<div class="form-field-section">
									<div class="form-field-s-title">
										<h6>INFORMACIÓN DE LA CUENTA</h6>

										<p>Para administrar tu foto de perfil, ten presente que solo se permiten archivos en formato: </br> .jpg, .jpeg y .png</p>
									</div>

									<div class="form-field-clearfix">
										<div class="form-field">
											<input type="text" class="afbgd-custom-input" id="nickname">

											<label for="nickname">NOMBRE EN PANTALLA *</label>

											<div class="input-msg">
												<!-- <p>Ingresa tu segundo nombre</p> -->
											</div>
										</div>
									</div>

									<div class="form-field">
										<input type="file" id="foto-perfil" class="dropify" />

										<label for="foto-perfil">FOTO DE PERFIL *</label>

										<div class="input-msg"></div>
									</div>

									<div class="form-field">
										<!-- <input type="text" id="descripcion"> -->
										<textarea class="afbgd-custom-input" id="descripcion" cols="40" rows="10"></textarea>

										<label for="descripcion">DESCRIPCIÓN *</label>

										<div class="input-msg"></div>
									</div>
								</div>

								<div class="form-field-section">
									<div class="form-field-s-title">
										<h6>INFORMACIÓN PERSONAL</h6>
									</div>

									<div class="form-field">
										<input type="text" class="afbgd-custom-input" id="identificacion">

										<label for="identificacion">IDENTIFICACIÓN *</label>

										<div class="input-msg"></div>
									</div>

									<div class="form-field">
										<input type="text" class="afbgd-custom-input" id="primer-nombre">

										<label for="primer-nombre">PRIMER NOMBRE *</label>

										<div class="input-msg"></div>
									</div>

									<div class="form-field">
										<input type="text" class="afbgd-custom-input" id="segundo-nombre">

										<label for="segundo-nombre">SEGUNDO NOMBRE *</label>

										<div class="input-msg"></div>
									</div>

									<div class="form-field">
										<input type="text" class="afbgd-custom-input" id="primer-apellido">

										<label for="primer-apellido">PRIMER APELLIDO *</label>

										<div class="input-msg"></div>
									</div>

									<div class="form-field">
										<input type="text" class="afbgd-custom-input" id="segundo-apellido">

										<label for="segundo-apellido">SEGUNDO APELLIDO *</label>

										<div class="input-msg"></div>
									</div>

									<div class="form-field">
										<input type="text" class="afbgd-custom-input" id="correo-electronico">

										<label for="correo-electronico">CORREO ELECTRÓNICO *</label>

										<div class="input-msg"></div>
									</div>

									<div class="form-field">
										<input type="text" class="afbgd-custom-input" id="telefono-fijo">

										<label for="telefono-fijo">TELÉFONO FIJO</label>

										<div class="input-msg"></div>
									</div>

									<div class="form-field">
										<input type="text" class="afbgd-custom-input" id="telefono-movil">

										<label for="telefono-movil">TELÉFONO MOVIL *</label>

										<div class="input-msg"></div>
									</div>
								</div>

								<div class="form-field-section">
									<div class="form-field-s-title">
										<h6>UBICACIÓN</h6>
									</div>

									<div class="form-field">
										<input type="text" class="afbgd-custom-input" id="direccion">

										<label for="direccion">DIRECCIÓN DE RESIDENCIA *</label>

										<div class="input-msg"></div>
									</div>

									<div class="form-field">
										<select class="afbgd-custom-input" id="ubicacion"></select>

										<label for="ubicacion">PAÍS *</label>

										<div class="input-msg"></div>
									</div>
								</div>

								<div class="form-field-section">
									<div class="form-field-s-title">
										<h6>CUENTA PARA PAGOS</h6>
										<p>Completa una de las siguientes opciones para que UniversoPsiquico pueda realizar el pago de tus ganancias.</p>
									</div>

									<div class="form-field">
										<input type="text" class="afbgd-custom-input" id="bank-account">

										<label for="bank-account">CUENTA BANCARIA </label>

										<div class="input-msg"></div>
									</div>

									<div class="form-field">
										<input type="text" class="afbgd-custom-input" id="paypal-account">

										<label for="paypal-account">CUENTA DE PAYPAL</label>

										<div class="input-msg"></div>
									</div>
								</div>

								<div class="form-submit-section">
									<a href="#" class="fsbtn-secondary" id="btn-descartar">
										<span class="fsbtn-text">
											DESCARTAR CAMBIOS
										</span>
									</a>

									<a href="#" class="fsbtn-primary" id="btn-update">
										<span class="fsbtn-icon">
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
												<path fill="#ffffff" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
											</svg>
										</span>

										<span class="fsbtn-text">
											GUARDAR CAMBIOS
										</span>
									</a>
								</div>
							</form>
						</div>
					</div>
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
	<script src="/src/js/dashboard-especialista/perfil-script.js"></script>
</body>

</html>