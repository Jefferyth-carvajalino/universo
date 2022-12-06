<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<title>Universo psiquico - Trabaja con nosotros</title>

	<link href="/src/libs/dropify/css/dropify.min.css" rel="stylesheet">
	<link rel="stylesheet" href="/src/css/trabaja-con-nosotros.min.css" />

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
		<section id="s-users">
			<div id="container-content-users">
				<div id="info-u">
					<div id="form-user-desc">
						<form id="">
							<h2 id="titlef-t">Trabaja con nosotros</h2>
							<div class="form-inputs-box">
								<div class="form-input-container">
									<input type="text" class="jff-custom-input" id="primer-n" placeholder="">
									<label for="primer-n">Primer nombre<span class="campo-o">*</span></label>
								</div>

								<div class="form-input-container">
									<input type="text" class="jff-custom-input" id="segundo-n">
									<label for="segundo-n">Segundo nombre</label>
								</div>

								<div class="form-input-container">
									<input type="text" class="jff-custom-input" id="primer-a">
									<label for="primer-a">Primer apellido<span class="campo-o">*</span></label>
								</div>

								<div class="form-input-container">
									<input type="text" class="jff-custom-input" id="segundo-a">
									<label for="segundo-a">Segundo apellido</label>
								</div>

								<div class="form-input-container">
									<input type="text" class="jff-custom-input" id="nickname">
									<label for="nickname">Nombre profesional<span class="campo-o">*</span></label>
								</div>

								<div class="form-input-container">
									<input type="t-email" class="jff-custom-input" id="t-email">
									<label for="t-email">correo<span class="campo-o">*</span></label>
								</div>

								<div class="form-input-container">
									<select class="jff-custom-input" id="countries">
										<!-- <option value="Seleccionar"> - Seleccionar - </option> -->
									</select>
									<label class="on-focus" for="countries">Paises<span class="campo-o">*</span></label>
								</div>

								<div class="form-input-container">
									<select class="jff-custom-input" id="cities" disabled>
										<!-- <option value="Seleccionar"> - Seleccionar - </option> -->
									</select>
									<label class="on-focus" for="cities">Ciudad<span class="campo-o">*</span></label>
								</div>

								<div class="form-input-container">
									<input type="text" class="jff-custom-input" id="address">
									<label for="address">Dirección<span class="campo-o">*</span></label>
								</div>

								<div class="form-input-container">
									<input type="text" class="jff-custom-input" id="phone">
									<label for="phone">Teléfono</label>
								</div>

								<div class="form-input-container">
									<input type="text" class="jff-custom-input" id="cell-phone">
									<label for="cell-phone">Celular<span class="campo-o">*</span></label>
								</div>

								<div class="form-input-container">
									<input type="date" class="jff-custom-input" id="fecha-n">
									<label for="fecha-n">fecha de nacimiento<span class="campo-o">*</span></label>
								</div>

								<div style="width: 95%;" class="c-i-pqrs form-input-container">
									<textarea class="jff-custom-input" id="perfil-servicio" style="height: 100px; padding: 20px;"></textarea>
									<label for="perfil-servicio" class="">Perfil de servicios<span class="campo-o">*</span></label>
								</div>

								<div style="width: 95%;" class="c-i-pqrs form-input-container">
									<textarea class="jff-custom-input" id="experiencia-l" style="height: 100px; padding: 20px;"></textarea>
									<label for="experiencia-l" class="">Experiencia laboral<span class="campo-o">*</span></label>
								</div>

								<div style="width: 95%;" class="c-i-pqrs form-input-container">
									<textarea class="jff-custom-input" id="plataformas" style="height: 100px; padding: 20px;"></textarea>
									<label for="plataformas" class="">Aplicaciones o plataformas en las que ha trabajado<span class="campo-o">*</span></label>
								</div>

								<div style="width: 95%;" class="form-input-container">
									<input type="file" id="image-profile" name="image-profile" class="dropify" data-min-width="99" data-max-width="301" data-min-height="99" data-max-height="301" data-show-errors="true" data-errors-position="outside" data-allowed-file-extensions="jpg png jpeg>">
									<label id="img-p" for="image-profile">Foto de perfil<span class="campo-o">*</span></label>
								</div>

								<div style="width: 95%;" class="form-input-container">
									<input type="file" id="f-identidad" name="f-identidad" class="dropify" data-min-width="99" data-max-width="5000" data-min-height="99" data-max-height="9000" data-show-errors="true" data-errors-position="outside" data-allowed-file-extensions="jpg png jpeg>">
									<label id="img-id" for="f-identidad">Fotocopia de identidad<span class="campo-o">*</span></label>
								</div>
							</div>
						</form>
						<a href=" #" id="btn-send-tra-nos">Enviar</a>
					</div>
				</div>
			</div>
		</section>
	</main>

	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/footer.php"; ?>

	<!-- Scripts -->
	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/js/commons-script.html"; ?>
	<script src="https://www.google.com/recaptcha/api.js?render=6Lfhl9IZAAAAAA5iSF520_ou02EL2zI6xVgxUQm7"></script>
	<script src="/src/libs/dropify/js/dropify.min.js"></script>
	<script src="/src/js/trabaja-con-nosotros-script.js"></script>
</body>

</html>