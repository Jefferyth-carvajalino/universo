@extends('layouts.app')

@push('page_styles')
	{!!Html::style('css/noticias.css')!!}
@endpush

@section('content')
<main>
		<section class="nsc">
			<div id="new-img"></div>
			<div>
				<div id="new-html-container">
					<h3>
						
					</h3>

					<div class="nd">
						
					</div>
				</div>
			</div>
		</section>
    @push('page_scripts')
        <script src="{{asset('js/noticia-script.js')}}"></script>
    @endpush
	</main>
@endsection
