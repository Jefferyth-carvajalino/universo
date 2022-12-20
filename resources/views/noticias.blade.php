@extends('layouts.app')

@push('page_styles')
	{!!Html::style('css/noticias.css')!!}
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
					Blog
				</h3>
			</div>

			<div class="ab-container" id="n-ab">

			</div>
		</section>

		<section class="s-al">
		</section>
		
		@include('layouts.nuestrosAsesores')
	</main>
    @push('page_scripts')
        <script src="{{asset('js/noticias-script.js')}}"></script>
    @endpush
@endsection
