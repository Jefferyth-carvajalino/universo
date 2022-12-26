@extends('customer.layouts.app')
@push('styles_header')
    <link rel="stylesheet" href="{{asset('css/dash-advicer/dshb-perfil-especialista.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/dshb-paquetes.css')}}">
@endpush
@section('page')
Perfil
@endsection
@section('content')
<div id="paquetes-container">
					<div class="dshb-title-container">
						<h4>PAQUETES</h4>

						<p>
							Para poder conversar con un asesor, requieres tener fondos en tu cartera. Acá podrás adquirlos comprando alguno de los siguientes paquetes.
						</p>

						<p class="actual-balance-container">
							Saldo actual: <span>$99863.2</span> dolares
							<a href="/dashboard-consultor/paquetes/" class="btn-refrescar-saldo">Refrescar</a>
						</p>
					</div>

					<div id="mc-paquetes-box">
						<!-- LOADED WITH JS -->
					<span>
					<img src="/src/img/paquetes/paquete-de-1.png" alt="img paquetes">
					<a style="right: auto !important; bottom: 20px !important;" href="#" class="btn-comprar-w" data-package-id="10" onclick="getWompiData(event, this); return gtag_report_conversion('')" data-package-cost="1"><svg style="width:18px;height:18px" viewBox="0 0 24 24"><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>comprar</a>
				</span><span>
					<img src="/src/img/paquetes/paquete-de-3.png" alt="img paquetes">
					<a style="right: auto !important; bottom: 20px !important;" href="#" class="btn-comprar-w" data-package-id="1" onclick="getWompiData(event, this); return gtag_report_conversion('')" data-package-cost="3"><svg style="width:18px;height:18px" viewBox="0 0 24 24"><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>comprar</a>
				</span><span>
					<img src="/src/img/paquetes/paquete-de-15.png" alt="img paquetes">
					<a style="right: auto !important; bottom: 20px !important;" href="#" class="btn-comprar-w" data-package-id="2" onclick="getWompiData(event, this); return gtag_report_conversion('')" data-package-cost="15"><svg style="width:18px;height:18px" viewBox="0 0 24 24"><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>comprar</a>
				</span><span>
					<img src="/src/img/paquetes/paquete-de-20.png" alt="img paquetes">
					<a style="right: auto !important; bottom: 20px !important;" href="#" class="btn-comprar-w" data-package-id="9" onclick="getWompiData(event, this); return gtag_report_conversion('')" data-package-cost="30"><svg style="width:18px;height:18px" viewBox="0 0 24 24"><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>comprar</a>
				</span></div>

					<div style="width: 100%; display: flex; justify-content: center; align-items: center">
						<h3 style="width: 100%;text-align: center;font-size: 25px;color: #00e5e5;margin-bottom: 20px;">Recibe 3 minutos adicionales por tu primera compra</h3>
					</div>
				</div>
@endsection
@push('scripts_footer')
    @include('customer.viewPerfil.scripts')
@endpush
