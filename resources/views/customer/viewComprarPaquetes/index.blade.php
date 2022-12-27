@extends('customer.layouts.app')
@push('styles_header')
    <link rel="stylesheet" href="{{ asset('css/dash-advicer/dshb-perfil-especialista.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/dshb-paquetes.css') }}">
@endpush
@push('scripts_footer')
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://www.paypal.com/sdk/js?client-id=ASK6PN_rOg9_RIvmpvcGtumKI6YzAH8XOu5mLjL269FrckStKuiyJjmmrUq_kRIRke1eToYWVFS6meko"></script>
    <script type="text/javascript" src="https://checkout.wompi.co/widget.js"></script>
@endpush
@section('page')
    Paquetes
@endsection
@section('pre-main')
<div class="pay-modal">
    <div class="loader-wrapper">
        <div class="loader"></div>
    </div>
    <div class="pay-modal-container">
        <div class="modal-header">
            <h3>Comprar paquete</h3>

            <a href="#" class="btn-close-modal">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
            </a>
        </div>

        <div class="modal-body">
            <div id="shopping-package-container">
                <div class="enu-card">
                    <div class="enu-c-back">
                        <h5 id="sps-package-name"></h5>
                    </div>
                    <div class="enu-c-front">
                        <div class="nec-icon">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve" width="150px" height="150px">
                                <style type="text/css">
                                    .st0 {
                                        fill: #606060;
                                    }
                                </style>
                                <g>
                                    <path class="st0" d="M266.7,116.3h-15.6v-15.6c0-1.8-1.4-3.2-3.2-3.2c0,0,0,0,0,0h-15.6V81.8c0-1.8-1.4-3.2-3.2-3.2c0,0,0,0,0,0H38c-1.8,0-3.2,1.4-3.2,3.2c0,0,0,0,0,0v106.3c0,1.8,1.4,3.2,3.2,3.2h15.6V207c0,1.8,1.4,3.2,3.2,3.2c0,0,0,0,0,0h15.6v15.6c0,1.8,1.4,3.2,3.2,3.2c0,0,0,0,0,0h191c1.8,0,3.2-1.4,3.2-3.2V119.5C269.9,117.7,268.5,116.3,266.7,116.3z M41.2,85.1h184.6v99.9H41.2V85.1z M60.1,191.4H229c1.8,0,3.2-1.4,3.2-3.2v-84.3h12.4v99.9H60.1V191.4z M263.5,222.6H78.9v-12.4h169c1.8,0,3.2-1.4,3.2-3.2c0,0,0,0,0,0v-84.3h12.4V222.6z" />
                                    <path class="st0" d="M65.8,173.5c0,1.8,1.4,3.2,3.2,3.2c0,0,0,0,0,0h129c1.8,0,3.2-1.4,3.2-3.2c0,0,0,0,0,0c0-7.2,5.9-13.1,13.1-13.1c1.8,0,3.2-1.4,3.2-3.2c0,0,0,0,0,0v-44.4c0-1.8-1.4-3.2-3.2-3.2c0,0,0,0,0,0c-7.2,0-13.1-5.9-13.1-13.1c0-1.8-1.4-3.2-3.2-3.2c0,0,0,0,0,0H69c-1.8,0-3.2,1.4-3.2,3.2c0,0,0,0,0,0c0,7.2-5.9,13.1-13.1,13.1c-1.8,0-3.2,1.4-3.2,3.2c0,0,0,0,0,0v44.4c0,1.8,1.4,3.2,3.2,3.2c0,0,0,0,0,0C59.9,160.4,65.8,166.2,65.8,173.5z M55.9,115.8c8.2-1.4,14.6-7.8,16-16h123.1c1.4,8.2,7.8,14.6,16,16v38.5c-8.2,1.4-14.6,7.8-16,16H72c-1.4-8.2-7.8-14.6-16-16V115.8z" />
                                    <path class="st0" d="M139.5,146.4h-19.3c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2h10.1v6c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2v-6h2.8c5.8,0,10.6-4.7,10.6-10.6V135c0-1.8-1.4-3.2-3.2-3.2c0,0,0,0,0,0h-23.5v-4c0-2.3,1.9-4.1,4.1-4.1h19.3c1.8,0,3.2-1.4,3.2-3.2c0-1.8-1.4-3.2-3.2-3.2l0,0h-10.1v-6c0-1.8-1.4-3.2-3.2-3.2c-1.8,0-3.2,1.4-3.2,3.2v6h-2.8c-5.8,0-10.6,4.7-10.6,10.6v7.2c0,1.8,1.4,3.2,3.2,3.2h23.5v4C143.7,144.5,141.8,146.4,139.5,146.4z" />
                                    <path class="st0" d="M173,144.8c5.4,0,9.8-4.4,9.8-9.8c0-5.4-4.4-9.8-9.8-9.8c-5.4,0-9.8,4.4-9.8,9.8l0,0C163.2,140.4,167.6,144.8,173,144.8zM173,131.6c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4c0,0,0,0,0,0C169.6,133.1,171.1,131.6,173,131.6z" />
                                    <path class="st0" d="M94,144.8c5.4,0,9.8-4.4,9.8-9.8s-4.4-9.8-9.8-9.8c-5.4,0-9.8,4.4-9.8,9.8l0,0C84.2,140.4,88.6,144.8,94,144.8z M94,131.6c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.4-3.4,3.4c-1.9,0-3.4-1.5-3.4-3.4l0,0C90.7,133.1,92.2,131.6,94,131.6z" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div id="paypal-btns-container"></div>
        </div>
    </div>
</div>
@endsection
@section('content')
    <div id="paquetes-container">
        <div class="dshb-title-container">
            <h4>PAQUETES</h4>

            <p>
                Para poder conversar con un asesor, requieres tener fondos en tu cartera. Acá podrás adquirlos comprando
                alguno de los siguientes paquetes.
            </p>

            <p class="actual-balance-container">
                Saldo actual: <span>$99863.2</span> dolares
                <a href="/dashboard-consultor/paquetes/" class="btn-refrescar-saldo">Refrescar</a>
            </p>
        </div>

        <div id="mc-paquetes-box">
            <!-- LOADED WITH JS -->

        </div>

        <div style="width: 100%; display: flex; justify-content: center; align-items: center">
            <h3 style="width: 100%;text-align: center;font-size: 25px;color: #00e5e5;margin-bottom: 20px;">Recibe 3 minutos
                adicionales por tu primera compra</h3>
        </div>
    </div>
@endsection
@push('scripts_footer')
    @include('customer.viewComprarPaquetes.scripts')
@endpush
