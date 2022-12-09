@extends('layouts.app')

@push('page_styles')
	{!!Html::style('css/noticias.css')!!}
@endpush

@section('content')
<main>
		<section class="nsc">
			<div id="new-img"><img src="{{url("img/noticias/los-cambios-de-estacion.png")}}" alt="AMOR Y AMISTAD "></div>
			<div>
				<div id="new-html-container">
					<h3>
						LOS CAMBIOS DE ESTACIÓN
					</h3>

					<div class="nd">
						<p>
							<b>Solsticios y equinoccios</b> Las estaciones astronómicas están determinadas por las cuatro posiciones principales en la órbita terrestre, opuestas dos a dos, que reciben el nombre de solsticios y equinoccios. Solsticio de invierno, equinoccio de primavera, solsticio de verano y equinoccio de otoño.
						</p>
	
						<p>
							Los equinoccios, el eje de rotación de la Tierra es perpendicular a los rayos del Sol, que caen verticalmente sobre el ecuador. En los solsticios, el eje terrestre se encuentra inclinado unos 23,5º, por lo que los rayos solares caen verticalmente sobre el trópico de Cáncer (verano en el hemisferio norte) o de Capricornio (verano en el hemisferio sur).
						</p>
	
						<p>
							Espiritualmente cada estación nos produce unos cambios en la forma de pensar, de ver la vida de sentir y de actuar de cada uno. Estamos en el norte en primavera donde la energía que nos trae el universo es un comienzo época de siembra, de creación para luego recoger la cosecha, ejemplo las siembras, las ideas los planes
						</p>
					</div>
				</div>
			</div>
		</section>
	</main>
    @push('page_scripts')
        <script src="{{asset('js/noticias-script.js')}}"></script>
    @endpush
@endsection
