@extends('layouts.app')

@push('page_styles')
	{!!Html::style('css/noticias.css')!!}
@endpush

@section('content')
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
				<div class="n-card">
					<div class="n-c-body">
						<div class="nc-icon">
							<img src="{{url("img/noticias/super-luna-llena-rosa-de-abril.png")}}" alt="">
						</div>
						<div class="nc-text">
							<h5>ASTROLOGÍA </h5>
							<p>ASTROLOGÍA Astrología es una ciencia que estudia la afectación de los planetas en la vida cotidiana, dependiendo de la fecha, hora y lugar de nacimiento que nos darán nuestros signos principales. Busca y determina la interacción entre los planetas que generan ciertos sucesos, positivos y negativos que a lo largo de nuestra vida se llegaran presentando y que pueden llegar a ser cíclicos.  Existen 12 signos que se encasillan según nuestro día y mes de nacimiento, lo que dará origen al signo solar. Adicionalmente nuestra hora y lugar de nacimiento, determinarán los otros dos aspectos relevantes: el signo ascendente, cuyo propósito es evidenciar cómo las personas nos perciben antes de establecer un vínculo de confianza y un signo lunar que acentúa la parte más profunda de nuestra personalidad, aquella parte que no es accesible para todas las personas, sino únicamente para las personas de nuestra intimidad. Existen adicionalmente varios planetas que van a presentar los sucesos anteriormente nombrados y son los que marcaran el marcapasos de los ritmos que llevaremos en nuestras vidas. Estos sucesos podemos potenciarlos o desvitalizarlos dependiendo de la necesidad, lo más importante es saber cómo llegar a abordarlos para que de esta manera se pueda mantener un balance energético elevado. Existen 12 signos los cuales son: aries, tauro, géminis, cáncer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario y piscis. Cada uno con sus particularidades, fortalezas y debilidades. Adicionalmente planetas: Mercurio, Venus, Marte, Júpiter, Saturno, Urano, Neptuno, Plutón. Estrellas: sol y luna. Que los podemos retomar de nuestra astrología tradicional. Toda esta bella interacción es la que permite desarrollar el libreto de nuestras vidas y permitirnos identificar rasgos profundos de nuestra personalidad, nuestras vivencias, quienes fuimos, quienes somos y quiénes seremos. </p>
						</div>
						<div class="nc-bt">
							<a href="/noticias/noticia/?id=1" id="btn-search">
								<span>
									<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>
								</span>
								<span>Ver más</span>
							</a>
						</div>
					</div>
				</div>
				<div class="n-card">
					<div class="n-c-body">
						<div class="nc-icon">
							<img src="{{url("img/noticias/super-luna-llena-rosa-de-abril.png")}}" alt="">
						</div>
						<div class="nc-text">
							<h5>ASTROLOGÍA </h5>
							<p>ASTROLOGÍA Astrología es una ciencia que estudia la afectación de los planetas en la vida cotidiana, dependiendo de la fecha, hora y lugar de nacimiento que nos darán nuestros signos principales. Busca y determina la interacción entre los planetas que generan ciertos sucesos, positivos y negativos que a lo largo de nuestra vida se llegaran presentando y que pueden llegar a ser cíclicos.  Existen 12 signos que se encasillan según nuestro día y mes de nacimiento, lo que dará origen al signo solar. Adicionalmente nuestra hora y lugar de nacimiento, determinarán los otros dos aspectos relevantes: el signo ascendente, cuyo propósito es evidenciar cómo las personas nos perciben antes de establecer un vínculo de confianza y un signo lunar que acentúa la parte más profunda de nuestra personalidad, aquella parte que no es accesible para todas las personas, sino únicamente para las personas de nuestra intimidad. Existen adicionalmente varios planetas que van a presentar los sucesos anteriormente nombrados y son los que marcaran el marcapasos de los ritmos que llevaremos en nuestras vidas. Estos sucesos podemos potenciarlos o desvitalizarlos dependiendo de la necesidad, lo más importante es saber cómo llegar a abordarlos para que de esta manera se pueda mantener un balance energético elevado. Existen 12 signos los cuales son: aries, tauro, géminis, cáncer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario y piscis. Cada uno con sus particularidades, fortalezas y debilidades. Adicionalmente planetas: Mercurio, Venus, Marte, Júpiter, Saturno, Urano, Neptuno, Plutón. Estrellas: sol y luna. Que los podemos retomar de nuestra astrología tradicional. Toda esta bella interacción es la que permite desarrollar el libreto de nuestras vidas y permitirnos identificar rasgos profundos de nuestra personalidad, nuestras vivencias, quienes fuimos, quienes somos y quiénes seremos. </p>
						</div>
						<div class="nc-bt">
							<a href="/noticias/noticia/?id=1" id="btn-search">
								<span>
									<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>
								</span>
								<span>Ver más</span>
							</a>
						</div>
					</div>
				</div>
				<div class="n-card">
					<div class="n-c-body">
						<div class="nc-icon">
							<img src="{{url("img/noticias/super-luna-llena-rosa-de-abril.png")}}" alt="">
						</div>
						<div class="nc-text">
							<h5>ASTROLOGÍA </h5>
							<p>ASTROLOGÍA Astrología es una ciencia que estudia la afectación de los planetas en la vida cotidiana, dependiendo de la fecha, hora y lugar de nacimiento que nos darán nuestros signos principales. Busca y determina la interacción entre los planetas que generan ciertos sucesos, positivos y negativos que a lo largo de nuestra vida se llegaran presentando y que pueden llegar a ser cíclicos.  Existen 12 signos que se encasillan según nuestro día y mes de nacimiento, lo que dará origen al signo solar. Adicionalmente nuestra hora y lugar de nacimiento, determinarán los otros dos aspectos relevantes: el signo ascendente, cuyo propósito es evidenciar cómo las personas nos perciben antes de establecer un vínculo de confianza y un signo lunar que acentúa la parte más profunda de nuestra personalidad, aquella parte que no es accesible para todas las personas, sino únicamente para las personas de nuestra intimidad. Existen adicionalmente varios planetas que van a presentar los sucesos anteriormente nombrados y son los que marcaran el marcapasos de los ritmos que llevaremos en nuestras vidas. Estos sucesos podemos potenciarlos o desvitalizarlos dependiendo de la necesidad, lo más importante es saber cómo llegar a abordarlos para que de esta manera se pueda mantener un balance energético elevado. Existen 12 signos los cuales son: aries, tauro, géminis, cáncer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario y piscis. Cada uno con sus particularidades, fortalezas y debilidades. Adicionalmente planetas: Mercurio, Venus, Marte, Júpiter, Saturno, Urano, Neptuno, Plutón. Estrellas: sol y luna. Que los podemos retomar de nuestra astrología tradicional. Toda esta bella interacción es la que permite desarrollar el libreto de nuestras vidas y permitirnos identificar rasgos profundos de nuestra personalidad, nuestras vivencias, quienes fuimos, quienes somos y quiénes seremos. </p>
						</div>
						<div class="nc-bt">
							<a href="/noticias/noticia/?id=1" id="btn-search">
								<span>
									<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>
								</span>
								<span>Ver más</span>
							</a>
						</div>
					</div>
				</div>
				<div class="n-card">
					<div class="n-c-body">
						<div class="nc-icon">
							<img src="{{url("img/noticias/super-luna-llena-rosa-de-abril.png")}}" alt="">
						</div>
						<div class="nc-text">
							<h5>ASTROLOGÍA </h5>
							<p>ASTROLOGÍA Astrología es una ciencia que estudia la afectación de los planetas en la vida cotidiana, dependiendo de la fecha, hora y lugar de nacimiento que nos darán nuestros signos principales. Busca y determina la interacción entre los planetas que generan ciertos sucesos, positivos y negativos que a lo largo de nuestra vida se llegaran presentando y que pueden llegar a ser cíclicos.  Existen 12 signos que se encasillan según nuestro día y mes de nacimiento, lo que dará origen al signo solar. Adicionalmente nuestra hora y lugar de nacimiento, determinarán los otros dos aspectos relevantes: el signo ascendente, cuyo propósito es evidenciar cómo las personas nos perciben antes de establecer un vínculo de confianza y un signo lunar que acentúa la parte más profunda de nuestra personalidad, aquella parte que no es accesible para todas las personas, sino únicamente para las personas de nuestra intimidad. Existen adicionalmente varios planetas que van a presentar los sucesos anteriormente nombrados y son los que marcaran el marcapasos de los ritmos que llevaremos en nuestras vidas. Estos sucesos podemos potenciarlos o desvitalizarlos dependiendo de la necesidad, lo más importante es saber cómo llegar a abordarlos para que de esta manera se pueda mantener un balance energético elevado. Existen 12 signos los cuales son: aries, tauro, géminis, cáncer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario y piscis. Cada uno con sus particularidades, fortalezas y debilidades. Adicionalmente planetas: Mercurio, Venus, Marte, Júpiter, Saturno, Urano, Neptuno, Plutón. Estrellas: sol y luna. Que los podemos retomar de nuestra astrología tradicional. Toda esta bella interacción es la que permite desarrollar el libreto de nuestras vidas y permitirnos identificar rasgos profundos de nuestra personalidad, nuestras vivencias, quienes fuimos, quienes somos y quiénes seremos. </p>
						</div>
						<div class="nc-bt">
							<a href="/noticias/noticia/?id=1" id="btn-search">
								<span>
									<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>
								</span>
								<span>Ver más</span>
							</a>
						</div>
					</div>
				</div>
				<div class="n-card">
					<div class="n-c-body">
						<div class="nc-icon">
							<img src="{{url("img/noticias/super-luna-llena-rosa-de-abril.png")}}" alt="">
						</div>
						<div class="nc-text">
							<h5>ASTROLOGÍA </h5>
							<p>ASTROLOGÍA Astrología es una ciencia que estudia la afectación de los planetas en la vida cotidiana, dependiendo de la fecha, hora y lugar de nacimiento que nos darán nuestros signos principales. Busca y determina la interacción entre los planetas que generan ciertos sucesos, positivos y negativos que a lo largo de nuestra vida se llegaran presentando y que pueden llegar a ser cíclicos.  Existen 12 signos que se encasillan según nuestro día y mes de nacimiento, lo que dará origen al signo solar. Adicionalmente nuestra hora y lugar de nacimiento, determinarán los otros dos aspectos relevantes: el signo ascendente, cuyo propósito es evidenciar cómo las personas nos perciben antes de establecer un vínculo de confianza y un signo lunar que acentúa la parte más profunda de nuestra personalidad, aquella parte que no es accesible para todas las personas, sino únicamente para las personas de nuestra intimidad. Existen adicionalmente varios planetas que van a presentar los sucesos anteriormente nombrados y son los que marcaran el marcapasos de los ritmos que llevaremos en nuestras vidas. Estos sucesos podemos potenciarlos o desvitalizarlos dependiendo de la necesidad, lo más importante es saber cómo llegar a abordarlos para que de esta manera se pueda mantener un balance energético elevado. Existen 12 signos los cuales son: aries, tauro, géminis, cáncer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario y piscis. Cada uno con sus particularidades, fortalezas y debilidades. Adicionalmente planetas: Mercurio, Venus, Marte, Júpiter, Saturno, Urano, Neptuno, Plutón. Estrellas: sol y luna. Que los podemos retomar de nuestra astrología tradicional. Toda esta bella interacción es la que permite desarrollar el libreto de nuestras vidas y permitirnos identificar rasgos profundos de nuestra personalidad, nuestras vivencias, quienes fuimos, quienes somos y quiénes seremos. </p>
						</div>
						<div class="nc-bt">
							<a href="/noticias/noticia/?id=1" id="btn-search">
								<span>
									<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>
								</span>
								<span>Ver más</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="s-al">
		</section>
	</main>
@endsection