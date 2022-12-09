@extends('layouts.app')

@push('page_styles')
	{!!Html::style('css/log-in.css')!!}
@endpush

@section('content')
<main>
		<section>
			<div id="container-btn-l-adviser">
				<a href="/login-adviser/" id="btn-login">
					<span>
						<img src="http://127.0.0.1:8000/img/dashboard/i-perfil.svg" alt="">
					</span>
					<span>Login Asesor</span>
				</a>
			</div>
			
			<div id="log-in-card">
				<div>
					<div>
						<a href="#" class="lgntab-link active" data-tc="lgntab-i-1">
							Registrarme
						</a>

						<a href="#" class="lgntab-link " data-tc="lgntab-i-2">
							Iniciar Sesión
						</a>
					</div>

					<div>
						<div class="lgn-socialn-row">
							<p>Con tus redes sociales</p>

							<div class="sn-btns-container">
								<div class="sn-lgn-btn">
									<div class="g-signin2" data-onsuccess="onSignIn"></div>
								</div>

								<div class="sn-lgn-btn"></div>
							</div>
						</div>

						<div class="lgntab-items-container">
							<div class="" id="lgn-itabs-c">
								<div class="lgntab-item" id="lgntab-i-1">
									<form id="signin-form">
										<div class="form-inputs-box">
											<div class="lgn-input-container">
												<span>
													<svg style="width:24px;height:24px" viewBox="0 0 24 24">
														<path fill="#999999" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z" />
													</svg>
												</span>

												<input type="text" class="uppercased" id="sign-in-name" placeholder="Nombre completo">
											</div>

											<div class="lgn-input-container">
												<span>
													<svg style="width:24px;height:24px" viewBox="0 0 24 24">
														<path fill="#999999" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
													</svg>
												</span>

												<input type="text" id="sign-in-username" placeholder="Nombre de usuario">
											</div>

											<div class="lgn-input-container">
												<span>
													<svg style="width:24px;height:24px" viewBox="0 0 24 24">
														<path fill="#999999" d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z" />
													</svg>
												</span>

												<input type="text" id="sign-in-email" placeholder="Correo electrónico">
											</div>

											<!-- <div class="lgn-input-container">
												<span>
													<svg style="width:24px;height:24px" viewBox="0 0 24 24">
														<path fill="#999999" d="M16,18H7V4H16M11.5,22A1.5,1.5 0 0,1 10,20.5A1.5,1.5 0 0,1 11.5,19A1.5,1.5 0 0,1 13,20.5A1.5,1.5 0 0,1 11.5,22M15.5,1H7.5A2.5,2.5 0 0,0 5,3.5V20.5A2.5,2.5 0 0,0 7.5,23H15.5A2.5,2.5 0 0,0 18,20.5V3.5A2.5,2.5 0 0,0 15.5,1Z" />
													</svg>
												</span>

												<input type="text" id="sign-in-cellphone" placeholder="Teléfono celular">
											</div> -->

											<!-- <div class="lgn-input-container">
												<span>
													<svg style="width:24px;height:24px" viewBox="0 0 24 24">
														<path fill="#999999" d="M21,21V17C21,15.89 20.1,15 19,15H18V12C18,10.89 17.1,10 16,10H13V8H11V10H8C6.89,10 6,10.89 6,12V15H5C3.89,15 3,15.89 3,17V21H1V23H23V21M12,7A2,2 0 0,0 14,5C14,4.62 13.9,4.27 13.71,3.97L12,1L10.28,3.97C10.1,4.27 10,4.62 10,5A2,2 0 0,0 12,7Z" />
													</svg>
												</span>

												<input type="date" id="sign-in-birthdate" placeholder="Fecha de nacimiento">
											</div> -->

											<div class="lgn-input-container">
												<span>
													<svg style="width:24px;height:24px" viewBox="0 0 24 24">
														<path fill="#999999" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z" />
													</svg>
												</span>

												<select id="sign-in-genre">
													<option value="seleccionar">seleccionar genero</option>
													<option value="Femenino">Femenino</option>
													<option value="Masculino">Masculino</option>
													<option value="Otro">Otro</option>
												</select>
											</div>

											<!-- <div class="lgn-input-container">
												<span>
													<svg style="width:24px;height:24px" viewBox="0 0 24 24">
														<path fill="#999999" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
													</svg>
												</span>

												<select id="sign-in-country">
													<option value="seleccionar">seleccionar ubicación</option>
												</select>
											</div> -->

											<div class="lgn-input-container">
												<span>
													<svg style="width:24px;height:24px" viewBox="0 0 24 24">
														<path fill="#999999" d="M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20M8.5,12A1.5,1.5 0 0,0 7,10.5A1.5,1.5 0 0,0 5.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,12M13,10.89C12.39,10.33 11.44,10.38 10.88,11C10.32,11.6 10.37,12.55 11,13.11C11.55,13.63 12.43,13.63 13,13.11V10.89Z" />
													</svg>
												</span>

												<input type="password" id="sign-in-password" placeholder="Contraseña">
											</div>

											<div class="lgn-input-container">
												<span>
													<svg style="width:24px;height:24px" viewBox="0 0 24 24">
														<path fill="#999999" d="M12.63,2C18.16,2 22.64,6.5 22.64,12C22.64,17.5 18.16,22 12.63,22C9.12,22 6.05,20.18 4.26,17.43L5.84,16.18C7.25,18.47 9.76,20 12.64,20A8,8 0 0,0 20.64,12A8,8 0 0,0 12.64,4C8.56,4 5.2,7.06 4.71,11H7.47L3.73,14.73L0,11H2.69C3.19,5.95 7.45,2 12.63,2M15.59,10.24C16.09,10.25 16.5,10.65 16.5,11.16V15.77C16.5,16.27 16.09,16.69 15.58,16.69H10.05C9.54,16.69 9.13,16.27 9.13,15.77V11.16C9.13,10.65 9.54,10.25 10.04,10.24V9.23C10.04,7.7 11.29,6.46 12.81,6.46C14.34,6.46 15.59,7.7 15.59,9.23V10.24M12.81,7.86C12.06,7.86 11.44,8.47 11.44,9.23V10.24H14.19V9.23C14.19,8.47 13.57,7.86 12.81,7.86Z" />
													</svg>
												</span>

												<input type="password" id="sign-in-password-repeated" placeholder="Repetir contraseña">
											</div>
										</div>

										<div id="have-account-row">
											<p>
												¿Ya tienes una cuenta?
											</p>

											<a href="#" id="go-to-login">Inicia sesión</a>
										</div>

										<div class="lgn-submit-container">
											<button type="submit">Registrarme</button>
										</div>
									</form>
								</div>

								<div class="lgntab-item" id="lgntab-i-2">
									<form id="login-form">
										<div class="form-inputs-box">
											<div class="lgn-input-container">
												<span>
													<svg style="width:24px;height:24px" viewBox="0 0 24 24">
														<path fill="#999999" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
													</svg>

												</span>

												<input type="text" id="login-username" placeholder="Nombre de usuario ó correo electrónico" autofocus="true">
											</div>

											<div class="lgn-input-container">
												<span>
													<svg style="width:24px;height:24px" viewBox="0 0 24 24">
														<path fill="#999999" d="M17,7H22V17H17V19A1,1 0 0,0 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14A1,1 0 0,0 15,19V5A1,1 0 0,0 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18A1,1 0 0,0 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20M8.5,12A1.5,1.5 0 0,0 7,10.5A1.5,1.5 0 0,0 5.5,12A1.5,1.5 0 0,0 7,13.5A1.5,1.5 0 0,0 8.5,12M13,10.89C12.39,10.33 11.44,10.38 10.88,11C10.32,11.6 10.37,12.55 11,13.11C11.55,13.63 12.43,13.63 13,13.11V10.89Z" />
													</svg>
												</span>

												<input type="password" id="login-password" placeholder="Contraseña">

												<span class="show-password-btn">
													<svg style="width:24px;height:24px" viewBox="0 0 24 24">
														<path fill="#999999" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
													</svg>

													<svg style="width:24px;height:24px" viewBox="0 0 24 24">
														<path fill="#ff3333" d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z" />
													</svg>
												</span>
											</div>
										</div>

										<div id="remember-row">
											<a href="/forgot-my-password/"><u>¡Olvidé mi contraseña!</u></a>
										</div>

										<div class="lgn-submit-container">
											<button type="submit">Iniciar sesión</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
	
    @push('page_scripts')
        <script src="{{asset('js/login-script.js')}}"></script>
    @endpush
@endsection