@extends('customer.layouts.app')
@push('styles_header')
    <link rel="stylesheet" href="{{ asset('css/dash-advicer/dshb-perfil-especialista.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/dshb-mi-horoscopo.css') }}">
@endpush
@section('page')
    Perfil
@endsection
@section('content')
    <div id="ba-container">
        <div class="advisers-list-component">

            <div id="content-description-horoscope">
                <h2>
                    MI HORÓSCOPO
                </h2>
            </div>

            <div id="horoscope-container">
            </div>
        </div>
    </div>
@endsection
@push('scripts_footer')
    @include('customer.viewMiHoroscopo.scripts')
@endpush
