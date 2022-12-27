<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Universo Psiquico - @yield('page')</title>

	<link rel="stylesheet" href="{{asset('libs/dropify/css/dropify.min.css')}}">
	<link rel="stylesheet" href="{{url('css/my-components/_advisers-list.css')}}">
	<link rel="stylesheet" href="{{url('libs/pagination/pagination.min.css')}}">
	<link rel="stylesheet" href="{{url("libs/DataTables/datatables.min.css")}}">
    @stack('styles_header')

	<!-- Global site tag (gtag.js) - Google Ads: 1003325170 -->
    @method('scripts_header')
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
    @include('customer.partials.header')
    @yield('pre-main')
	<main class="dshb-main">
		<section id="s-dashboard">
            @include('customer.partials.dshb-sidebar')
			<div class="dshb-content-container">
				@yield('content')
			</div>
		</section>
	</main>
	<script src="{{asset('libs/jquery/jQuery.min.js')}}"></script>
    <script src="{{asset('libs/DataTables/datatables.min.js')}}"></script>
    <script src="{{asset('libs/sweetalert2/sweetalert2.all.min.js')}}"></script>
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
	<script>
		$('#btn-sidebar-actuator').click(function(e) {
			e.preventDefault();
			$('.dshb-sidebar').toggleClass("show");
		});
	</script>
    <script src="{{asset('js/general-functions.js')}}"></script>
    <script src="{{asset('js/commons-script.js')}}"></script>


    @stack('scripts_footer')

</body>

</html>
