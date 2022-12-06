@extends('layouts.app')

@push('page_styles')
	{!!Html::style('css/especialidades.css')!!}
@endpush

@section('content')
<main>
		<section id="s-top">
			<div>
				<h3 id="title">
					<span>
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 57.9 59.8" style="enable-background:new 0 0 57.9 59.8;" xml:space="preserve" width="150px" height="150px">
<style type="text/css">
	.st59{fill:#606060;}
</style>
<g>
	<path class="st59" d="M54.2,16.2c-0.2-0.4-0.6-0.7-1.1-0.9c-0.5-0.1-1-0.1-1.4,0.2c-0.4,0.2-0.7,0.6-0.9,1.1
		c-0.1,0.5-0.1,1,0.2,1.4c3,5.2,2.1,11.8-2.2,16.1l0,0c-0.2-0.2-0.3-0.4-0.5-0.6L38.1,23.3c0.4-0.3,0.8-0.6,1.2-1l2.1-2.1
		c0.7-0.7,0.7-1.9,0-2.6c-0.7-0.7-1.9-0.7-2.6,0l-2.1,2.1c-0.8,0.8-1.9,1.3-3.1,1.3h-4.2c-0.5,0-1,0.2-1.3,0.5l-3.2,3.2
		c-0.3,0.3-0.7,0.5-1.2,0.5c-0.4,0-0.8-0.2-1.2-0.5c-0.3-0.3-0.5-0.7-0.5-1.2c0-0.4,0.2-0.8,0.5-1.2l7.3-7.3
		c4.2-4.2,10.8-5.1,15.9-2.2c0.9,0.5,2,0.2,2.5-0.7c0.2-0.4,0.3-0.9,0.2-1.4c-0.1-0.5-0.4-0.9-0.9-1.1c-3.2-1.8-6.9-2.5-10.5-2
		c-3.1,0.4-6.1,1.7-8.5,3.7c-3-2.5-6.8-3.8-10.8-3.8c-4.6,0-8.8,1.8-12.1,5c-3.2,3.2-5,7.5-5,12.1c0,4.6,1.8,8.8,5,12.1l0.4,0.4
		c0,0,0,0,0,0c0.2,1,0.6,1.9,1.3,2.6c0.8,0.8,1.7,1.2,2.8,1.4c0.1,1,0.6,2,1.4,2.8c0.8,0.8,1.7,1.2,2.8,1.4c0.1,1,0.6,2,1.4,2.8
		c0.8,0.8,1.7,1.2,2.8,1.4c0.1,1,0.6,2,1.4,2.8c0.9,0.9,2.1,1.4,3.4,1.4c1.3,0,2.5-0.5,3.4-1.4l0.9-0.9l1.4,1.4
		c0.9,0.9,2.1,1.4,3.4,1.4c1.3,0,2.5-0.5,3.4-1.4c0.8-0.8,1.2-1.8,1.4-2.8c1.1-0.1,2-0.6,2.8-1.4c0.7-0.8,1.2-1.7,1.4-2.8
		c1-0.1,2-0.6,2.8-1.4c0.7-0.8,1.2-1.7,1.4-2.8c1-0.1,2-0.6,2.8-1.4c0.4-0.4,0.7-0.8,0.9-1.3c0.1-0.1,0.2-0.1,0.2-0.2l2-2
		C56.8,31.3,58,22.8,54.2,16.2z M35.5,29.1c-0.7-0.7-1.9-0.7-2.6,0c-0.3,0.3-0.5,0.8-0.5,1.3c0,0.5,0.2,1,0.5,1.3l8.5,8.5
		c0.2,0.2,0.3,0.5,0.3,0.8c0,0.3-0.1,0.6-0.3,0.8c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.3l-8.5-8.5c-0.7-0.7-1.9-0.7-2.6,0
		c-0.3,0.3-0.5,0.8-0.5,1.3c0,0.5,0.2,1,0.5,1.3l8.5,8.5c0.4,0.4,0.4,1.1,0,1.5c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.3
		l-4.4-4.4c-0.1-0.1-0.2-0.2-0.3-0.3L29.9,40c-0.7-0.7-1.9-0.7-2.6,0c-0.7,0.7-0.7,1.9,0,2.6l0.1,0.1c-0.5-0.3-1.1-0.5-1.7-0.5
		c-0.1-1-0.6-2-1.4-2.8c-0.8-0.8-1.7-1.2-2.8-1.4c-0.1-1-0.6-2-1.4-2.8c-0.8-0.8-1.7-1.2-2.8-1.4c-0.1-1-0.6-2-1.4-2.8
		c-1.9-1.9-4.9-1.9-6.8,0L7.5,33c0,0,0,0-0.1,0.1c-2-2.4-3-5.4-3-8.5c0-3.6,1.4-6.9,3.9-9.5c2.5-2.5,5.9-3.9,9.5-3.9
		c2.9,0,5.8,1,8.1,2.7L20,19.8c-1,1-1.6,2.3-1.6,3.8c0,1.4,0.6,2.8,1.6,3.8c1,1,2.3,1.6,3.8,1.6c1.4,0,2.8-0.6,3.8-1.6l2.6-2.6h3.4
		c0.2,0,0.4,0,0.6,0l11.4,11.4c0.4,0.4,0.4,1.1,0,1.5l0,0c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.3L35.5,29.1z M29.3,44.7
		l3.8,3.8c0.4,0.4,0.4,1.1,0,1.5c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.3l-1.9-1.9c0.1-0.4,0.2-0.8,0.2-1.2
		C29.9,46.2,29.7,45.4,29.3,44.7z M22.5,48l1.8-1.8c0.2-0.2,0.5-0.3,0.8-0.3c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8
		c0,0.3-0.1,0.6-0.3,0.8L24,49.5c-0.2,0.2-0.5,0.3-0.8,0.3s-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8C22.2,48.5,22.3,48.2,22.5,48z
		 M10.1,35.6l1.8-1.8c0.2-0.2,0.5-0.3,0.8-0.3s0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8s-0.1,0.6-0.3,0.8l-1.8,1.8
		c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.3c-0.2-0.2-0.3-0.5-0.3-0.8C9.8,36.1,9.9,35.8,10.1,35.6z M14.2,39.8l1.8-1.8
		c0.2-0.2,0.5-0.3,0.8-0.3s0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.8s-0.1,0.6-0.3,0.8l-1.8,1.8c-0.2,0.2-0.5,0.3-0.8,0.3
		c-0.3,0-0.6-0.1-0.8-0.3l0,0c-0.2-0.2-0.3-0.5-0.3-0.8C13.9,40.2,14,40,14.2,39.8z M18.4,43.9l1.8-1.8c0.2-0.2,0.5-0.3,0.8-0.3
		s0.6,0.1,0.8,0.3c0.4,0.4,0.4,1.1,0,1.5l-1.8,1.8c-0.2,0.2-0.5,0.3-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.3l0,0c-0.2-0.2-0.3-0.5-0.3-0.8
		C18.1,44.4,18.2,44.1,18.4,43.9z"></path>
</g>
</svg>
					</span>
					Astrologia
				</h3>

				<p id="description">
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

			<div id="img-bg-container">
				<img class="seccion-image" src="{{url("img/especialidades/astrologia.png")}}" alt="Astrología">
			</div>
		</section>
	</main>
@endsection