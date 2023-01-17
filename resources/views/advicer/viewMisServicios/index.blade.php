@extends('advicer.layouts.app')
@push('styles_header')
    <link rel="stylesheet" href="{{asset('css/dshb-perfil-especialista.css')}}">
    <link rel="stylesheet" href="{{asset('css/dshb-mi-servicio.css')}}">
@endpush
@section('page')
Perfil
@endsection
@section('content')
<div class="popup showing" id="servicios-c-popup">
	<div class="popup-container">
		<button class="btn-close-popup" id="btn-close-popup-servicios-c">
			<svg style="width:28px;height:28px" viewBox="0 0 24 24">
				<path fill="#1173a1" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
			</svg>
		</button>
		<div class="popup-content-send-serv">
			<h2>Enviar video</h2>
			<input type="file" name="" id="">

			<a href="#">Enviar</a>
			</div>
		</div>
	</div>
</div>
<div id="ba-container">
	<div class="advisers-list-component">

		<div id="content-description-horoscope">
			<h2>
				MIS SERVICIOS
			</h2>
		</div>

		<div id="horoscope-container">
			<div class="content-solicitud-horoscope">
				<div class="content-image-serv">
					<img src="/src/img/user-default.png" alt="">
				</div>
				<span>
					<span>
						Servicio:
					</span>
					<span>
						 Tarot
					</span>
				</span>

				<span>
					<span>
						Usuario:
					</span>
					<span>
						 Nombre usuario
					</span>
				</span>

				<span>
					<span>
						Link de pago:
					</span>
					<span>
						http://127.0.0.1:8000/dashboard-especialista/mis-servicios/
					</span>
				</span>

				<div class="content-service-state">
					<div>
						<span>
							Estado:
						</span>

						<span class="estado-pago">Pago</span>
						<span class="estado-nopago">No pago</span>
					</div>
					<a class="btn-responder-servicio" href="#">Responder</a>
				</div>
			</div>			
		</div>
	</div>
</div>
@endsection
@push('scripts_footer')
    @include('customer.viewPerfil.scripts')
@endpush
