<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Universo Psiquico - @yield('page')</title>

	<link rel="stylesheet" href="{{asset('libs/dropify/css/dropify.min.css')}}">
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
    <script src="{{asset('js/chat/chat-manipulacion.js')}}"></script>
    <script src="{{asset('js/chat/chat-advicer.js')}}"></script>
    @stack('scripts_footer')

</body>

</html>
