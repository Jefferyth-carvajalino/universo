@extends('advicer.layouts.app')
@push('styles_header')
    <link rel="stylesheet" href="{{asset('css/dash-advicer/dshb-perfil-especialista.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/dshb-mi-servicio.css')}}">
@endpush
@section('page')
Perfil
@endsection
@section('content')
<div id="ba-container">
	<div class="advisers-list-component">

		<div id="content-description-horoscope">
			<h2>
				MIS SERVICIOS
			</h2>
		</div>

		<div id="horoscope-container">
			<div class="content-solicitud-horoscope">
				<span>
					<span>
						USUARIO:
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
