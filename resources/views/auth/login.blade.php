<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>{{ config('app.name') }} | Login</title>

	<!-- Tell the browser to be responsive to screen width -->
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

	<!-- Font Awesome -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
	integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
	crossorigin="anonymous" referrerpolicy="no-referrer" />

	<!-- AdminLTE -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.1.0/css/adminlte.min.css"
	integrity="sha512-mxrUXSjrxl8vm5GwafxcqTrEwO1/oBNU25l20GODsysHReZo4uhVISzAKzaABH6/tTfAxZrY2FprmeAP5UZY8A=="
	crossorigin="anonymous" referrerpolicy="no-referrer" />

	<!-- iCheck -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/icheck-bootstrap/3.0.1/icheck-bootstrap.min.css"
	integrity="sha512-8vq2g5nHE062j3xor4XxPeZiPjmRDh6wlufQlfC6pdQ/9urJkU07NM0tEREeymP++NczacJ/Q59ul+/K2eYvcg=="
	crossorigin="anonymous"/>
	<link rel="stylesheet" href="css/header-style.css">
	<link rel="stylesheet" href="css/footer-style.css">
	<link rel="stylesheet" href="css/general-style.css">
	<link rel="stylesheet" href="css/login-style.css">
</head>

<body class="hold-transition login-page">
	<div id="principal-content-container">
		<div id="content-container">
			@include('layouts.header')
			
			<div id="principal-content-data">
				<div class="login-box">
					<div class="">
						<div class="card-body login-card-body">
							<div id="content-logo-login">
								<img src="img/logo.svg" alt="">
							</div>

							<form method="post" action="{{ url('/login') }}">
								@csrf

								<div class="content-input-login">
									<input type="email"
										name="email"
										value=""
										placeholder="Email"
										class="form-control @error('email') is-invalid @enderror">
										@error('email')
										<span class="error invalid-feedback">{{ $message }}</span>
										@enderror
									<div>
										<svg style="width:24px;height:24px" viewBox="0 0 24 24">
											<path fill="#748BA2" d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" />
										</svg>	
									</div>
								</div>

								<div class="content-input-login">
									<input type="password"
									name="password"
									placeholder="Password"
									class="form-control @error('password') is-invalid @enderror">
									@error('password')
									<span class="error invalid-feedback">{{ $message }}</span>
									@enderror
									<div>
										<svg style="width:24px;height:24px" viewBox="0 0 24 24">
											<path fill="#748BA2" d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z" />
										</svg>	
									</div>

								</div>

								<div class="row" id="btn-sigin">
									{{-- <div class="col-8">
										<div class="icheck-primary">
											<input type="checkbox" id="remember">
											<label for="remember">Remember Me</label>
										</div>
									</div> --}}

									<div class="col-6">
										<button type="submit" class="btn btn-primary btn-block">Ingresar</button>
									</div>

								</div>
							</form>

							<p class="mb-1 mt-1">
								<a href="{{ route('password.request') }}">¿Olvidaste tu contraseña?</a>
							</p>
							<p class="mb-0">
								<a href="{{ route('register') }}" class="text-center">Register a new membership</a>
							</p>
						</div>
						<!-- /.login-card-body -->
					</div>

				</div>
			</div>

			@include('layouts.footer')
		</div>
	</div>

<!-- /.login-box -->
	<script src="libs/jquery-3.2.1/jquery.min.js"></script>
	<script src="js/general-script.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
        crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
        integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
        crossorigin="anonymous"></script>

<!-- AdminLTE App -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.1.0/js/adminlte.min.js"
        integrity="sha512-AJUWwfMxFuQLv1iPZOTZX0N/jTCIrLxyZjTRKQostNU71MzZTEPHjajSK20Kj1TwJELpP7gl+ShXw5brpnKwEg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

</body>
</html>
