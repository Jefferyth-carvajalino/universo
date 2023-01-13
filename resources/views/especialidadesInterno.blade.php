@extends('layouts.app')

@push('page_styles')
	{!!Html::style('css/especialidades.css')!!}
@endpush

@section('content')
<main>
		<section id="s-top">
			<div>
				<h3 id="title">
					
				</h3>

				<p id="description">
					
				</p>
			</div>

			<div id="img-bg-container">
				
			</div>
		</section>
		
        @push('page_scripts')
            <script src="{{asset('js/speciality-script.js')}}"></script>
        @endpush
	</main>
@endsection