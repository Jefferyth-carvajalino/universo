@extends('customer.layouts.app')
@push('styles_header')
    <link rel="stylesheet" href="{{asset('css/dash-advicer/dshb-perfil-especialista.min.css')}}">
@endpush
@section('page')
Perfil
@endsection
@section('content')

						
					@include('layouts.nuestrosAsesoresDash')
@endsection
@push('scripts_footer')
    @include('customer.viewPerfil.scripts')
@endpush
