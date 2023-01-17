@extends('customer.layouts.app')
@push('styles_header')
    <link rel="stylesheet" href="{{asset('css/dash-advicer/dshb-perfil-especialista.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/dshb-buscar-asesor.css')}}">
@endpush
@section('page')
Mis Compras
@endsection
@section('content')
    @include('layouts.nuestrosAsesoresDash')
@endsection
@push('scripts_footer')
    <script src="{{asset('libs/pagination/pagination.min.js')}}"></script>
    @include('customer.viewEscogerAsesor.scripts')

@endpush
