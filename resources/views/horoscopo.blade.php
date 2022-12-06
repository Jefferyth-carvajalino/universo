@extends('layouts.app')

@push('page_styles')
	{!!Html::style('css/horoscopo.css')!!}
@endpush

@section('content')
<main>
		<section class="asc">
			<div class="at-container">
				<h3 class="seccion-title">
					<span>
						<svg style="width:24px;height:24px" viewBox="0 0 24 24">
							<path fill="#00e5e5" d="M20,11H4V8H20M20,15H13V13H20M20,19H13V17H20M11,19H4V13H11M20.33,4.67L18.67,3L17,4.67L15.33,3L13.67,4.67L12,3L10.33,4.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V3L20.33,4.67Z" />
						</svg>
					</span>
				</h3>
			</div>

			<div class="aintro-container">
				<div>
					<h3>Horóscopo</h3>
					<p>
						Con cada signo podemos saber las energías que están fluyendo en cada momento, pero profundizando
						un poco
						más, nos damos cuenta de cómo los astros influyen en nuestra personalidad y nos vamos a sentir
						identificados con nuestro signo solar. <br> El ideal del horóscopo es poder saber qué energías
						están influyendo en cada uno en el momento preciso para saber que es favorable y que no es favorable en planos como negocios, amor, empleos,
						familia, salud, entre otros. Las posiciones de los astros afectan nuestra psiquis, si nosotros colocamos cuidado
						a todas nuestras vivencias y analizamos las posiciones de los astros podemos darnos cuenta que si existe
						una influencia que no nos damos cuenta pero que existen.
					</p>
				</div>
			</div>

			<div class="ab-container" id="h-ab">
				<div id="h-card-container">
					<div class="h-card">
						<div>
							<div id="content-titel-horoscope">
								<h6>Leo</h6>
							</div>

							<div class="dcard">
								<img src="{{url("img/horoscopo/horoscopo-front/leo.svg")}}" alt="">
							</div>

							<div class="card-content">
								<div>

									<p>
										<b>Planeta:</b> Sol
									</p>

									<p>
										<b>Elemento:</b> Fuego
									</p>

									<p>
										Queridos Leoninos, hay que mantener la fe, es posible que para estas semanas, el universo te ponga a prueba en cuanto a tus ideales y a las cosas que deseas, es por eso que en tu corazón debe permanecer la motivación. De esta manera, debes aprovechar cada momento vivido para culminar en éxito los propósitos de tu mente. Tu planta: Helecho
									</p>
								</div>
							</div>

							<div class="content-btn-hor">
								<a href="/dashboard-consultor/horoscopo/">¿Quieres mas información de tu horoscopo?</a>
							</div>
						</div>
					</div>
					<div class="h-card">
						<div>
							<div id="content-titel-horoscope">
								<h6>Leo</h6>
							</div>

							<div class="dcard">
								<img src="{{url("img/horoscopo/horoscopo-front/leo.svg")}}" alt="">
							</div>

							<div class="card-content">
								<div>

									<p>
										<b>Planeta:</b> Sol
									</p>

									<p>
										<b>Elemento:</b> Fuego
									</p>

									<p>
										Queridos Leoninos, hay que mantener la fe, es posible que para estas semanas, el universo te ponga a prueba en cuanto a tus ideales y a las cosas que deseas, es por eso que en tu corazón debe permanecer la motivación. De esta manera, debes aprovechar cada momento vivido para culminar en éxito los propósitos de tu mente. Tu planta: Helecho
									</p>
								</div>
							</div>

							<div class="content-btn-hor">
								<a href="/dashboard-consultor/horoscopo/">¿Quieres mas información de tu horoscopo?</a>
							</div>
						</div>
					</div>
					<div class="h-card">
						<div>
							<div id="content-titel-horoscope">
								<h6>Leo</h6>
							</div>

							<div class="dcard">
								<img src="{{url("img/horoscopo/horoscopo-front/leo.svg")}}" alt="">
							</div>

							<div class="card-content">
								<div>

									<p>
										<b>Planeta:</b> Sol
									</p>

									<p>
										<b>Elemento:</b> Fuego
									</p>

									<p>
										Queridos Leoninos, hay que mantener la fe, es posible que para estas semanas, el universo te ponga a prueba en cuanto a tus ideales y a las cosas que deseas, es por eso que en tu corazón debe permanecer la motivación. De esta manera, debes aprovechar cada momento vivido para culminar en éxito los propósitos de tu mente. Tu planta: Helecho
										Queridos Leoninos, hay que mantener la fe, es posible que para estas semanas, el universo te ponga a prueba en cuanto a tus ideales y a las cosas que deseas, es por eso que en tu corazón debe permanecer la motivación. De esta manera, debes aprovechar cada momento vivido para culminar en éxito los propósitos de tu mente. Tu planta: Helecho
										Queridos Leoninos, hay que mantener la fe, es posible que para estas semanas, el universo te ponga a prueba en cuanto a tus ideales y a las cosas que deseas, es por eso que en tu corazón debe permanecer la motivación. De esta manera, debes aprovechar cada momento vivido para culminar en éxito los propósitos de tu mente. Tu planta: Helecho
										Queridos Leoninos, hay que mantener la fe, es posible que para estas semanas, el universo te ponga a prueba en cuanto a tus ideales y a las cosas que deseas, es por eso que en tu corazón debe permanecer la motivación. De esta manera, debes aprovechar cada momento vivido para culminar en éxito los propósitos de tu mente. Tu planta: Helecho
										Queridos Leoninos, hay que mantener la fe, es posible que para estas semanas, el universo te ponga a prueba en cuanto a tus ideales y a las cosas que deseas, es por eso que en tu corazón debe permanecer la motivación. De esta manera, debes aprovechar cada momento vivido para culminar en éxito los propósitos de tu mente. Tu planta: Helecho
									</p>
								</div>
							</div>

							<div class="content-btn-hor">
								<a href="/dashboard-consultor/horoscopo/">¿Quieres mas información de tu horoscopo?</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="s-al">
		</section>
	</main>
@endsection