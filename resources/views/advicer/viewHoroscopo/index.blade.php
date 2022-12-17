@extends('advicer.layouts.app')
@push('styles_header')
<link rel="stylesheet" href="{{asset('css/dash-advicer/dshb-horoscopo-especialista.min.css')}}">
@endpush
@section('page')
Horóscopo
@endsection
@section('pre-main')
<div class="popup" id="answer-horoscope-popup">
    <div class="popup-container">
        <button class="btn-close-popup" id="btn-close-popup-answer-horoscope">
            <svg style="width:28px;height:28px" viewBox="0 0 24 24">
                <path fill="#1173a1" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
        </button>
        <div class="popup-content">
            <div>
                <span>
                    <span>
                        NOMBRE:
                    </span>
                    <span id="popup-name">
                        Pepito perez
                    </span>
                </span>

                <span>
                    <span>
                        FECHA DE NACIMIETO:
                    </span>
                    <span id="popup-date">
                        1998-05-24
                    </span>
                </span>

                <span>
                    <span>
                        SIGNO:
                    </span>
                    <span id="popup-sign">
                        Géminis
                    </span>
                </span>
            </div>

            <div>
                <textarea id="text-answer-horoscope" placeholder="Responder Horoscopo"></textarea>
            </div>

            <div id="content-btn-popup-answerhor">
                <a href="#" id="btn-send-answer-horoscope">Enviar</a>
            </div>
        </div>
    </div>
</div>
@endsection
@section('content')
<h4>Lista de horóscopos pendientes</h4>
				<div id="horoscope-container">
					<!-- <div class="content-solicitud-horoscope">
						<span>
							<span>
								NOMBRE:
							</span>
							<span>
								Pepito perez
							</span>
						</span>

						<span>
							<span>
								FECHA DE NACIMIETO:
							</span>
							<span>
								1998-05-24
							</span>
						</span>

						<span>
							<span>
								SIGNO:
							</span>
							<span>
								Géminis
							</span>
						</span>
						<div class="content-btn-res-hor">
							<a href="#">Responder</a>
						</div>
					</div> -->
				</div>
@endsection
@push('scripts_footer')
    @include('advicer.viewMisIngresos.scripts')
@endpush
