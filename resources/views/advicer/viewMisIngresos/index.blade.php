@extends('advicer.layouts.app')
@push('styles_header')
<link rel="stylesheet" href="{{asset('libs/DataTables/datatables.min.css')}}">
<link rel="stylesheet" href="{{asset('css/dash-advicer/dshb-mis-ingresos-especialista.min.css')}}">
@endpush
@section('page')
Mis Ingresos
@endsection
@section('content')
<div id="mis-ingresos-container">
    <div class="dshb-title-container">
        <h4>MIS INGRESOS</h4>
        <p class="actual-balance-container">
            Total: $<span></span> USD
        </p>
    </div>
    <div id="mc-table-box">
        <div class="material-table-container" id="mis-ganancias-table-container">
            <table id="mis-ganancias-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Duración</th>
                        <th>Calificación</th>
                        <th>Fecha</th>
                        <th>Ingreso</th>
                        <th>Estado del pago</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</div>
@endsection
@push('scripts_footer')
    @include('advicer.viewMisIngresos.scripts')
@endpush
