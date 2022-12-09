<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>{{ config('app.name') }}</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
	<meta name="csrf-token" content="{{ csrf_token() }}" />
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

    @stack('page_styles')
</head>

<body>
	@include('layouts.header')
	@yield('content')
	@include('layouts.footer')

<script src="{{url('libs/jquery-3.2.1/jquery.min.js')}}"></script>

<!--FIREBASE-->
<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js"></script>
{{-- <script src="/app.js"></script> --}}

<script src="https://js.pusher.com/7.0/pusher.min.js"></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4D6TBKHQ6C"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4D6TBKHQ6C');
</script>
<script>
		$('#menu-btn').click(function(e) {
			e.preventDefault();

			if ($('header').hasClass("extended")) {
				$('header').removeClass("extended");

			} else {
				$('header').addClass("extended");
			}

		});
	</script>
	<script src="{{url("js/general-functions.js")}}"></script>
	{{-- <script src="{{url('libs/printJS/print.min.js')}}"></script> --}}
	<script src="{{url('libs/notify/notify.min.js')}}"></script>
	<script src="{{url('libs/sweetalert2/sweetalert2.all.min.js')}}"></script>
	<script src="https://www.google.com/recaptcha/api.js?render=6Lfhl9IZAAAAAA5iSF520_ou02EL2zI6xVgxUQm7"></script>
	<script src="{{url("libs/owl-carousel/owl.carousel.min.js")}}"></script>
	<script src="{{url("libs/pagination/pagination.min.js")}}"></script>
	<script src="{{url('js/index-script.js')}}"></script>
	<script src="{{url('js/commons-script.js')}}"></script>
	<script>
		let url = "{{url('')}}";
	</script>
	@stack('page_scripts')
</body>
</html>
