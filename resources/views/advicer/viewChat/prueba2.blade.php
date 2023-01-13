<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Universo Psiquico - @yield('page')</title>
    <link rel="stylesheet" href="{{asset('css/dash-advicer/dshb-perfil-especialista.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/dshb-chat-especialista.css')}}">
</head>

<body>
    @include('advicer.partials.header')

	<main class="dshb-main">
		<section id="s-dashboard">
            @include('advicer.partials.dshb-sidebar')
			<div class="dshb-content-container">
				@yield('content')
			</div>
		</section>
	</main>
	<script src="{{asset('libs/jquery/jQuery.min.js')}}"></script>
    <script src="{{asset('js/general-functions.js')}}"></script>
    @include('advicer.viewChat.chat-sockets-advicer')
    @stack('scripts_footer')

</body>

</html>




