@extends('customer.layouts.app')
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
						<a href="http://127.0.0.1:8000/dashboard-consultor/mis-servicios/" target="_blank">http://127.0.0.1:8000/dashboard-consultor/mis-servicios/</a>
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
				</div>
			</div>			
		</div>
	</div>
</div>
@endsection
@push('scripts_footer')
    @include('customer.viewPerfil.scripts')
@endpush
