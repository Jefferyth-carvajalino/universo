@extends('layouts.app')

@push('page_styles')
	{!!Html::style('css/especialidades.css')!!}
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
					Especialidades
				</h3>
			</div>

			<div class="ab-container" id="e-ab">
				<div class="e-card">
					<div class="e-c-body">
						<div class="ec-icon">
							<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 57.9 59.8" style="enable-background:new 0 0 57.9 59.8;" xml:space="preserve" width="150px" height="150px"><style type="text/css">	.st59{fill:#606060;}</style><g>	<path class="st59" d="M40.5,13c1,0.5,2.2,0.2,2.7-0.7l2.7-4.7c0.5-1,0.2-2.2-0.7-2.7c-1-0.5-2.2-0.2-2.7,0.7l-2.7,4.7		C39.2,11.2,39.5,12.4,40.5,13z"></path>	<path class="st59" d="M14,12.2c0.5,1,1.8,1.3,2.7,0.7c1-0.5,1.3-1.8,0.7-2.7l-2.7-4.7c-0.5-1-1.8-1.3-2.7-0.7		c-1,0.5-1.3,1.8-0.7,2.7L14,12.2z"></path>	<path class="st59" d="M28.2,51.2c-1.1,0-2,0.9-2,2v4.7c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2v-4.7C30.2,52.1,29.3,51.2,28.2,51.2z"></path>	<path class="st59" d="M57.8,20.9L57.8,20.9c-0.5-1.5-1.8-2.5-3.3-2.6l-15.7-1.5L32.5,2.3C31.9,0.9,30.5,0,29,0		c-1.6,0-2.9,0.9-3.5,2.3l-6.2,14.5L3.5,18.3c-1.5,0.1-2.8,1.1-3.3,2.6c-0.5,1.5-0.1,3,1.1,4.1l11.9,10.4L9.7,50.8		c-0.3,1.5,0.2,3,1.5,3.9c0.7,0.5,1.4,0.7,2.2,0.7c0.7,0,1.4-0.2,2-0.5L29,46.9l13.6,8.1c0.6,0.4,1.3,0.5,2,0.5		c0.8,0,1.6-0.3,2.2-0.7c1.3-0.9,1.8-2.4,1.5-3.9l-3.5-15.4L56.6,25C57.8,23.9,58.2,22.4,57.8,20.9z M17.5,32.7L6.4,22.9l14.7-1.4		c0.9-0.1,1.7-0.6,2-1.5L29,6.5l5.8,13.6c0.4,0.8,1.1,1.4,2,1.5l14.7,1.4l-11.1,9.7c-0.7,0.6-1,1.5-0.8,2.4l3.2,14.4l-12.7-7.5		c-0.8-0.5-1.7-0.5-2.5,0L15,49.5l1.4-6.3l0,0l1.8-8.1C18.5,34.2,18.2,33.3,17.5,32.7z"></path></g></svg>
						</div>

						<div class="ec-text">
							<h5>ASTROLOGÍA</h5>
							<p>A través de todas las culturas, siempre se ha notado el gusto e interés por temas como las posiciones de los astros y cómo afectan el psiquis del ser humano, la ASTROLOGÍA es una herramienta milenaria que data desde años atrás del comienzo de nuestra era cristiana, desde los antiguos filósofos y el crecimiento de ciencias como la geometría, la matemática, la medicina, filosofía entre otras, las civilizaciones ancestrales siempre tenían muy presente los cambios planetarios en sus decisiones de modo de vida, en sus cultivos, iniciaciones, y calendarios. Significa el estudio de la posición de los astros en relación con la psiquis humana, su influencia en cada personalidad, es una ciencia predictiva, y podemos encontrar en ella, temas muy puntuales como formas de ser, personalidad, amor, uniones-separaciones, profesión, economía, familia, salud de la persona que desea consultar, al igual como los tiempos en los que se dan cada uno de los sucesos a preguntar.</p>
						</div>
						<div class="ec-bt">
							<a href="/especialidades/especialidad/?id=1" id="btn-search">
								<span>
									<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>
								</span>
								<span>Ver más</span>
							</a>
						</div>
					</div>
				</div>
				<div class="e-card">
					<div class="e-c-body">
						<div class="ec-icon">
							<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 57.9 59.8" style="enable-background:new 0 0 57.9 59.8;" xml:space="preserve" width="150px" height="150px"><style type="text/css">	.st59{fill:#606060;}</style><g>	<path class="st59" d="M40.5,13c1,0.5,2.2,0.2,2.7-0.7l2.7-4.7c0.5-1,0.2-2.2-0.7-2.7c-1-0.5-2.2-0.2-2.7,0.7l-2.7,4.7		C39.2,11.2,39.5,12.4,40.5,13z"></path>	<path class="st59" d="M14,12.2c0.5,1,1.8,1.3,2.7,0.7c1-0.5,1.3-1.8,0.7-2.7l-2.7-4.7c-0.5-1-1.8-1.3-2.7-0.7		c-1,0.5-1.3,1.8-0.7,2.7L14,12.2z"></path>	<path class="st59" d="M28.2,51.2c-1.1,0-2,0.9-2,2v4.7c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2v-4.7C30.2,52.1,29.3,51.2,28.2,51.2z"></path>	<path class="st59" d="M57.8,20.9L57.8,20.9c-0.5-1.5-1.8-2.5-3.3-2.6l-15.7-1.5L32.5,2.3C31.9,0.9,30.5,0,29,0		c-1.6,0-2.9,0.9-3.5,2.3l-6.2,14.5L3.5,18.3c-1.5,0.1-2.8,1.1-3.3,2.6c-0.5,1.5-0.1,3,1.1,4.1l11.9,10.4L9.7,50.8		c-0.3,1.5,0.2,3,1.5,3.9c0.7,0.5,1.4,0.7,2.2,0.7c0.7,0,1.4-0.2,2-0.5L29,46.9l13.6,8.1c0.6,0.4,1.3,0.5,2,0.5		c0.8,0,1.6-0.3,2.2-0.7c1.3-0.9,1.8-2.4,1.5-3.9l-3.5-15.4L56.6,25C57.8,23.9,58.2,22.4,57.8,20.9z M17.5,32.7L6.4,22.9l14.7-1.4		c0.9-0.1,1.7-0.6,2-1.5L29,6.5l5.8,13.6c0.4,0.8,1.1,1.4,2,1.5l14.7,1.4l-11.1,9.7c-0.7,0.6-1,1.5-0.8,2.4l3.2,14.4l-12.7-7.5		c-0.8-0.5-1.7-0.5-2.5,0L15,49.5l1.4-6.3l0,0l1.8-8.1C18.5,34.2,18.2,33.3,17.5,32.7z"></path></g></svg>
						</div>

						<div class="ec-text">
							<h5>ASTROLOGÍA</h5>
							<p>A través de todas las culturas, siempre se ha notado el gusto e interés por temas como las posiciones de los astros y cómo afectan el psiquis del ser humano, la ASTROLOGÍA es una herramienta milenaria que data desde años atrás del comienzo de nuestra era cristiana, desde los antiguos filósofos y el crecimiento de ciencias como la geometría, la matemática, la medicina, filosofía entre otras, las civilizaciones ancestrales siempre tenían muy presente los cambios planetarios en sus decisiones de modo de vida, en sus cultivos, iniciaciones, y calendarios. Significa el estudio de la posición de los astros en relación con la psiquis humana, su influencia en cada personalidad, es una ciencia predictiva, y podemos encontrar en ella, temas muy puntuales como formas de ser, personalidad, amor, uniones-separaciones, profesión, economía, familia, salud de la persona que desea consultar, al igual como los tiempos en los que se dan cada uno de los sucesos a preguntar.</p>
						</div>
						<div class="ec-bt">
							<a href="/especialidades/especialidad/?id=1" id="btn-search">
								<span>
									<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>
								</span>
								<span>Ver más</span>
							</a>
						</div>
					</div>
				</div>
				<div class="e-card">
					<div class="e-c-body">
						<div class="ec-icon">
							<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 57.9 59.8" style="enable-background:new 0 0 57.9 59.8;" xml:space="preserve" width="150px" height="150px"><style type="text/css">	.st59{fill:#606060;}</style><g>	<path class="st59" d="M40.5,13c1,0.5,2.2,0.2,2.7-0.7l2.7-4.7c0.5-1,0.2-2.2-0.7-2.7c-1-0.5-2.2-0.2-2.7,0.7l-2.7,4.7		C39.2,11.2,39.5,12.4,40.5,13z"></path>	<path class="st59" d="M14,12.2c0.5,1,1.8,1.3,2.7,0.7c1-0.5,1.3-1.8,0.7-2.7l-2.7-4.7c-0.5-1-1.8-1.3-2.7-0.7		c-1,0.5-1.3,1.8-0.7,2.7L14,12.2z"></path>	<path class="st59" d="M28.2,51.2c-1.1,0-2,0.9-2,2v4.7c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2v-4.7C30.2,52.1,29.3,51.2,28.2,51.2z"></path>	<path class="st59" d="M57.8,20.9L57.8,20.9c-0.5-1.5-1.8-2.5-3.3-2.6l-15.7-1.5L32.5,2.3C31.9,0.9,30.5,0,29,0		c-1.6,0-2.9,0.9-3.5,2.3l-6.2,14.5L3.5,18.3c-1.5,0.1-2.8,1.1-3.3,2.6c-0.5,1.5-0.1,3,1.1,4.1l11.9,10.4L9.7,50.8		c-0.3,1.5,0.2,3,1.5,3.9c0.7,0.5,1.4,0.7,2.2,0.7c0.7,0,1.4-0.2,2-0.5L29,46.9l13.6,8.1c0.6,0.4,1.3,0.5,2,0.5		c0.8,0,1.6-0.3,2.2-0.7c1.3-0.9,1.8-2.4,1.5-3.9l-3.5-15.4L56.6,25C57.8,23.9,58.2,22.4,57.8,20.9z M17.5,32.7L6.4,22.9l14.7-1.4		c0.9-0.1,1.7-0.6,2-1.5L29,6.5l5.8,13.6c0.4,0.8,1.1,1.4,2,1.5l14.7,1.4l-11.1,9.7c-0.7,0.6-1,1.5-0.8,2.4l3.2,14.4l-12.7-7.5		c-0.8-0.5-1.7-0.5-2.5,0L15,49.5l1.4-6.3l0,0l1.8-8.1C18.5,34.2,18.2,33.3,17.5,32.7z"></path></g></svg>
						</div>

						<div class="ec-text">
							<h5>ASTROLOGÍA</h5>
							<p>A través de todas las culturas, siempre se ha notado el gusto e interés por temas como las posiciones de los astros y cómo afectan el psiquis del ser humano, la ASTROLOGÍA es una herramienta milenaria que data desde años atrás del comienzo de nuestra era cristiana, desde los antiguos filósofos y el crecimiento de ciencias como la geometría, la matemática, la medicina, filosofía entre otras, las civilizaciones ancestrales siempre tenían muy presente los cambios planetarios en sus decisiones de modo de vida, en sus cultivos, iniciaciones, y calendarios. Significa el estudio de la posición de los astros en relación con la psiquis humana, su influencia en cada personalidad, es una ciencia predictiva, y podemos encontrar en ella, temas muy puntuales como formas de ser, personalidad, amor, uniones-separaciones, profesión, economía, familia, salud de la persona que desea consultar, al igual como los tiempos en los que se dan cada uno de los sucesos a preguntar.</p>
						</div>
						<div class="ec-bt">
							<a href="/especialidades/especialidad/?id=1" id="btn-search">
								<span>
									<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#ffffff" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>
								</span>
								<span>Ver más</span>
							</a>
						</div>
					</div>
				</div>
				<div class="e-card">
					<div class="e-c-body">
						<div class="ec-icon">
							<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 57.9 59.8" style="enable-background:new 0 0 57.9 59.8;" xml:space="preserve" width="150px" height="150px"><style type="text/css">	.st59{fill:#606060;}</style><g>	<path class="st59" d="M40.5,13c1,0.5,2.2,0.2,2.7-0.7l2.7-4.7c0.5-1,0.2-2.2-0.7-2.7c-1-0.5-2.2-0.2-2.7,0.7l-2.7,4.7		C39.2,11.2,39.5,12.4,40.5,13z"></path>	<path class="st59" d="M14,12.2c0.5,1,1.8,1.3,2.7,0.7c1-0.5,1.3-1.8,0.7-2.7l-2.7-4.7c-0.5-1-1.8-1.3-2.7-0.7		c-1,0.5-1.3,1.8-0.7,2.7L14,12.2z"></path>	<path class="st59" d="M28.2,51.2c-1.1,0-2,0.9-2,2v4.7c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2v-4.7C30.2,52.1,29.3,51.2,28.2,51.2z"></path>	<path class="st59" d="M57.8,20.9L57.8,20.9c-0.5-1.5-1.8-2.5-3.3-2.6l-15.7-1.5L32.5,2.3C31.9,0.9,30.5,0,29,0		c-1.6,0-2.9,0.9-3.5,2.3l-6.2,14.5L3.5,18.3c-1.5,0.1-2.8,1.1-3.3,2.6c-0.5,1.5-0.1,3,1.1,4.1l11.9,10.4L9.7,50.8		c-0.3,1.5,0.2,3,1.5,3.9c0.7,0.5,1.4,0.7,2.2,0.7c0.7,0,1.4-0.2,2-0.5L29,46.9l13.6,8.1c0.6,0.4,1.3,0.5,2,0.5		c0.8,0,1.6-0.3,2.2-0.7c1.3-0.9,1.8-2.4,1.5-3.9l-3.5-15.4L56.6,25C57.8,23.9,58.2,22.4,57.8,20.9z M17.5,32.7L6.4,22.9l14.7-1.4		c0.9-0.1,1.7-0.6,2-1.5L29,6.5l5.8,13.6c0.4,0.8,1.1,1.4,2,1.5l14.7,1.4l-11.1,9.7c-0.7,0.6-1,1.5-0.8,2.4l3.2,14.4l-12.7-7.5		c-0.8-0.5-1.7-0.5-2.5,0L15,49.5l1.4-6.3l0,0l1.8-8.1C18.5,34.2,18.2,33.3,17.5,32.7z"></path></g></svg>
						</div>

						<div class="ec-text">
							<h5>ASTROLOGÍA</h5>
							<p>A través de todas las culturas, siempre se ha notado el gusto e interés por temas como las posiciones de los astros y cómo afectan el psiquis del ser humano, la ASTROLOGÍA es una herramienta milenaria que data desde años atrás del comienzo de nuestra era cristiana, desde los antiguos filósofos y el crecimiento de ciencias como la geometría, la matemática, la medicina, filosofía entre otras, las civilizaciones ancestrales siempre tenían muy presente los cambios planetarios en sus decisiones de modo de vida, en sus cultivos, iniciaciones, y calendarios. Significa el estudio de la posición de los astros en relación con la psiquis humana, su influencia en cada personalidad, es una ciencia predictiva, y podemos encontrar en ella, temas muy puntuales como formas de ser, personalidad, amor, uniones-separaciones, profesión, economía, familia, salud de la persona que desea consultar, al igual como los tiempos en los que se dan cada uno de los sucesos a preguntar.</p>
						</div>
						<div class="ec-bt">
							<a href="/especialidades/especialidad/?id=1" id="btn-search">
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