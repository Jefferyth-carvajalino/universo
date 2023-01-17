<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Universo Psiquico - @yield('page')</title>

	<link rel="stylesheet" href="{{asset('libs/dropify/css/dropify.min.css')}}">
	<link rel="stylesheet" href="{{url('libs/owl-carousel/owl.carousel.min.css')}}">
	<link rel="stylesheet" href="{{url('libs/owl-carousel/owl.theme.default.min.css')}}">
	<link rel="stylesheet" href="{{url('libs/pagination/pagination.min.css')}}">
	<link rel="manifest" href="{{url('/manifest.json')}}">
	{{-- <link rel="stylesheet" href="{{url('libs/printJS/print.min.css')}}"> --}}
	<link rel="stylesheet" href="{{url('css/header.css')}}">
	<link rel="stylesheet" href="{{url('css/footer.css')}}">
	<link rel="stylesheet" href="{{url('css/_page-reset.css')}}">
	<link rel="stylesheet" href="{{url('css/general-style.css')}}">
	<link rel="stylesheet" href="{{url('css/my-components/_advisers-list.css')}}">
    @stack('styles_header')

	<!-- Global site tag (gtag.js) - Google Ads: 1003325170 -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=AW-1003325170"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'AW-1003325170');
	</script>
</head>

<body>
    @include('advicer.partials.header')
    @yield('pre-main')
	<main class="dshb-main">
		<section id="s-dashboard">
            @include('advicer.partials.dshb-sidebar')
			<div class="dshb-content-container">
				@yield('content')
			</div>
		</section>
	</main>
	<script src="{{asset('libs/jquery/jQuery.min.js')}}"></script>
	<script>
		$('#btn-sidebar-actuator').click(function(e) {
			e.preventDefault();
			$('.dshb-sidebar').toggleClass("show");
		});
	</script>
	<script src="{{asset('libs/dropify/js/dropify.min.js')}}"></script>
	<script src="{{asset('js/general-functions.js')}}"></script>
	<script src="{{asset('js/dshb-commons-script.js')}}"></script>
    <script src="{{asset('js/commons-script.js')}}"></script>
    <script src="https://unpkg.com/regenerator-runtime@0.13.9/runtime.js"></script>
    <script src="https://unpkg.com/@adonisjs/websocket-client"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="{{url('libs/sweetalert2/sweetalert2.all.min.js')}}"></script>
    <script src="{{asset('js/chat/chat-manipulacion.js')}}"></script>
    <script src="{{asset('js/chat/chat-advicer.js')}}"></script>
	<script src="{{url("js/general-functions.js")}}"></script>
	{{-- <script src="{{url('libs/printJS/print.min.js')}}"></script> --}}
	<script src="{{url('libs/notify/notify.min.js')}}"></script>

	<script src="https://www.google.com/recaptcha/api.js?render=6Lfhl9IZAAAAAA5iSF520_ou02EL2zI6xVgxUQm7"></script>
	<script src="{{url("libs/owl-carousel/owl.carousel.min.js")}}"></script>
	<script src="{{url("libs/pagination/pagination.min.js")}}"></script>
	<script src="{{url('js/index-script.js')}}"></script>
    <script src="{{url('js/app.js')}}"></script>
	<script src="{{url('js/commons-script.js')}}"></script>
	<script>
		let url = "{{url('')}}";
	</script>
	@stack('page_scripts')
    @stack('scripts_footer')

</body>

</html>
