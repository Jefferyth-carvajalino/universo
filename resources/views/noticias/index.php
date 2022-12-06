<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>Universo Psiquico - Blog</title>

	<link rel="stylesheet" href="/src/libs/owl-carousel/owl.carousel.min.css">
	<link rel="stylesheet" href="/src/libs/owl-carousel/owl.theme.default.min.css">
	<link rel="stylesheet" href="/src/css/noticias.min.css">
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
					Blog
				</h3>
			</div>

			<div class="ab-container" id="n-ab">
				<!-- <div class="n-card">
						<div class="n-c-body">
							<div class="nc-icon">
								<img src="/src/img/noticias/super-luna-abril.png" alt="">
							</div>

							<div class="nc-text">
								<h5>SUPER LUNA LLENA ROSA DE ABRIL</h5>

								<p>
									La luna llena brillará en su máximo esplendor a las 4:35 de la madrugada. El miércoles 8 de abril se podrá ver por la noche como la luna se transforma en una superluna grande y brillante. La NASA explica que el término de Superluna fue acuñado en 1979. La de hoy será la mayor y más brillante superluna
								</p>
							</div>

							<div class="nc-bt">
								<a href="/noticias/super-luna-llena-rosa-abril/" id="btn-search">
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
					</div>

					<div class="n-card">
						<div class="n-c-body">
							<div class="nc-icon">
								<img src="/src/img/noticias/cambios-estacion.png" alt="">
							</div>

							<div class="nc-text">
								<h5>LOS CAMBIOS DE ESTACION</h5>

								<p>
									Solsticios y equinoccios Las estaciones astronómicas están determinadas por las cuatro posiciones principales en la órbita terrestre, opuestas dos a dos, que reciben el nombre de solsticios y equinoccios. Solsticio de invierno, equinoccio de primavera, solsticio de verano y equinoccio de otoño. Los equinoccios, el eje de rotación de la Ti
								</p>
							</div>

							<div class="nc-bt">
								<a href="/noticias/los-cambios-de-estacion/" id="btn-search">
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
					</div>

					<div class="n-card">
						<div class="n-c-body">
							<div class="nc-icon">
								<img src="/src/img/noticias/textos-enriquecen-alma.png" alt="">
							</div>

							<div class="nc-text">
								<h5>TEXTOS QUE ENRIQUECEN TU ALMA</h5>

								<p>
									1-kibalion de los tres iniciados Este gran texto es para personas que quieran entrar en el gran mundo de las leyes universales y cómo funcionan, qué desea la antigüedad siempre han existido 2. Chocolate caliente para el alma Este texto nos ayuda en conversación con nosotros mismos, con lecturas cotidianas que nos dejan gran mensaje 3. Una
								</p>
							</div>

							<div class="nc-bt">
								<a href="/noticias/textos-que-enriquecen-tu-alma/" id="btn-search">
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
					</div>

					<div class="n-card">
						<div class="n-c-body">
							<div class="nc-icon">
								<img src="/src/img/noticias/ritual-semana.png" alt="">
							</div>

							<div class="nc-text">
								<h5>RITUAL DE LA SEMANA</h5>

								<p>
									Es una época de recogimiento, donde está activo el pensamiento y la quietud Para obtener ideas creativas para nuestra vida cotidiana a futuro cercano y emprender en la economía vamos hacer lo siguiente Materiales 1. Incienso 2. Varita de madera 3. Disponibilidad emocional Limpiar nuestro ambiente con cualquier incienso, o aromatizador, co
								</p>
							</div>

							<div class="nc-bt">
								<a href="/noticias/ritual-de-la-semana/" id="btn-search">
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
					</div>

					<div class="n-card">
						<div class="n-c-body">
							<div class="nc-icon">
								<img src="/src/img/noticias/venus.png" alt="">
							</div>

							<div class="nc-text">
								<h5>¿CÓMO INFLUYE EL PLANETA VENUS EN TU VIDA?</h5>

								<p>
									Venus es el planeta del amor en las emociones lo que nos indica que cuando lo tenemos bien aspectado nos produce unos sucesos muy lindos y bellos en nuestra vida personal del amor y cuando esta mal aspectado nos producen momentos de desestabilidad y de tristeza a nivel afectivo lo que tenemos qué tenerlo muy de nuestro lado para que con su
								</p>
							</div>

							<div class="nc-bt">
								<a href="/noticias/como-influye-el-planeta-venus-en-tu-vida/" id="btn-search">
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
					</div>

					<div class="n-card">
						<div class="n-c-body">
							<div class="nc-icon">
								<img src="/src/img/noticias/venus.png" alt="">
							</div>

							<div class="nc-text">
								<h5>EL PODER DE TU MASCOTA</h5>

								<p>
									Las mascotas siempre van a tener una conexión muy espiritual con su dueño les puedo contar sobre los perros y los gatos ellos siempre llegan con una misión muy especial con la persona que los cuidan ellos llegan como Ángeles aprender cosas pero también a cuidarte estéticamente ellos siempre van a captar la energía que el dueño tenga ya sea
								</p>
							</div>

							<div class="nc-bt">
								<a href="/noticias/el-poder-de-tu-mascota/" id="btn-search">
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
					</div>

					<div class="n-card">
						<div class="n-c-body">
							<div class="nc-icon">
								<img src="/src/img/noticias/venus.png" alt="">
							</div>

							<div class="nc-text">
								<h5>LA VOZ DE LAS ABUELAS ANCESTRALES</h5>

								<p>
									Siempre que hablamos de abuelas ancestrales hablamos también de pueblos indígenas de seres ancestrales de plantas maestras de mujeres llenas de conocimiento de la madre tierra de espiritualidad y de este principio femenino que todos llevamos dentro de sí las tradiciones y la sanación siempre está alrededor de estas mujeres que han dado su
								</p>
							</div>

							<div class="nc-bt">
								<a href="/noticias/la-voz-de-las-abuelas-ancestrales/" id="btn-search">
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
					</div>

					<div class="n-card">
						<div class="n-c-body">
							<div class="nc-icon">
								<img src="/src/img/noticias/gemas-de-tu-vida.png" alt="">
							</div>

							<div class="nc-text">
								<h5>LAS GEMAS DE TU VIDA</h5>

								<p>
									La gemoterapia es una ciencia energética y espiritual en donde buscamos una conexión entre el personaje y un cristal cada piedra o Gema tiene funciones y diferentes usos al igual que sirven como amuletos también están relacionadas con tu signo zodiacal y también con la personalidad de cada individuo.
								</p>
							</div>

							<div class="nc-bt">
								<a href="/noticias/las-gemas-de-tu-vida/" id="btn-search">
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
					</div>

					<div class="n-card">
						<div class="n-c-body">
							<div class="nc-icon">
								<img src="/src/img/noticias/4-elementos.png" alt="">
							</div>

							<div class="nc-text">
								<h5>LOS 4 ELEMENTOS</h5>

								<p>
									Son las diferentes formas en los que la naturaleza se manifiesta todos tenemos de todos pero uno es más fuerte que los otros. Este conjunto de todos ellos nos genera nuestros ideales y pensamientos por lo tanto este que tenemos más fuerte es el que nos ayuda a mantener estas características que son tan notorias en nuestra vida cotidiana.
								</p>
							</div>

							<div class="nc-bt">
								<a href="/noticias/los-4-elementos/" id="btn-search">
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
					</div>

					<div class="n-card">
						<div class="n-c-body">
							<div class="nc-icon">
								<img src="/src/img/noticias/atrapasuenhos.png" alt="">
							</div>

							<div class="nc-text">
								<h5>LOS ATRAPASUEÑOS</h5>

								<p>
									Los atrapasueños son instrumentos utilizados por la filosofía chamánica su origen está en las tierras indias americanas tiene un significado de la parte mental El aro significa la vida en sí el tejido interno significan los sueños e ideales de la persona y las plumas o tiras significan los pensamientos y el movimiento de cada persona en s
								</p>
							</div>

							<div class="nc-bt">
								<a href="/noticias/los-atrapasuenhos/" id="btn-search">
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
					</div>

					<div class="n-card">
						<div class="n-c-body">
							<div class="nc-icon">
								<img src="/src/img/noticias/chakras.png" alt="">
							</div>

							<div class="nc-text">
								<h5>¿QUÉ SON Y CÓMO ACTUAN LOS CHAKRAS?</h5>

								<p>
									Hablamos de chakras como los centros de energía o vórtices que tenemos cada persona dentro de  nuestro cuerpo, son como ruedas giratorias en el sentido de las manecillas del reloj. Ellos están por dentro de la columna vertebral y hacen una conexión con los cuerpos mental, físico y  espirituales, este concepto de los chakras viene desde la
								</p>
							</div>

							<div class="nc-bt">
								<a href="/noticias/que-son-y-como-actuan-los-chakras/" id="btn-search">
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
					</div>

					<div class="n-card">
						<div class="n-c-body">
							<div class="nc-icon">
								<img src="/src/img/noticias/vidas-pasadas.png" alt="">
							</div>

							<div class="nc-text">
								<h5>VIDAS PASADAS</h5>

								<p>
									Este tema de vidas pasadas tiene mucha controversia en la actualidad, podemos hablar según los temas de los escritos de libros antiguos como los upanishads y textos de yoga en los que hacen mención de la Encarnación como el método de la parte espiritual para sanar estas deudas que se va adquiriendo espíritu tras espíritu, lo que podemos d
								</p>
							</div>

							<div class="nc-bt">
								<a href="/noticias/vidas-pasadas/" id="btn-search">
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
	<script src="/src/libs/jquery/jQuery.min.js"></script>
	<script src="/src/libs/owl-carousel/owl.carousel.min.js"></script>
	<script src="/src/libs/pagination/pagination.min.js"></script>
	<script type="module" src="/src/js/noticias-script.js"></script>
</body>

</html>