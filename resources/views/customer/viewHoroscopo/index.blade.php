@extends('customer.layouts.app')
@push('styles_header')
    <link rel="stylesheet" href="{{asset('css/dash-advicer/dshb-perfil-especialista.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/dshb-horoscopo.css')}}">
@endpush
@section('page')
Perfil
@endsection
@section('content')
<div id="ba-container">
    <div class="advisers-list-component">

        <div id="content-description-horoscope">
            <h2>
                HORÓSCOPO
            </h2>
            <h2>
                Escoge tu asesor favorito para conocer más de tu horóscopo.
            </h2>
        </div>

        <div class="na-body" id="advisers-box"></div>

        <div class="paginator-container"></div>
    </div>


				</div>
@endsection
@push('scripts_footer')
    @include('customer.viewHoroscopo.scripts')
@endpush
