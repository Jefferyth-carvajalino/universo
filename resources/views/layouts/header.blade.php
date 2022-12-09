<div class="topbar">
	<button id="btn-goback">
		<svg style="width:24px;height:24px" viewBox="0 0 24 24">
			<path fill="#ffffff" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
		</svg>
	</button>
</div>

<header>
	<div class="menu-btn-container">
		<a href="#" id="menu-btn">
			<svg style="width:24px;height:24px" viewBox="0 0 24 24">
				<path fill="#f5f5f5" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
			</svg>
		</a>
	</div>

	<div class="brand-container">
		<a href="/"><img src="img/commons/brand.svg" alt=""></a>
	</div>

	<div class="nav-container">
		<nav>
			<ul>
				<li>
					<a href="{{url("/home")}}">INICIO</a>
				</li>

				<li>
					<a href="{{url("/horoscopo")}}">HORÓSCOPO</a>
				</li>

				<li>
					<a href="{{url("/especialidades")}}">ESPECIALIDADES</a>
				</li>

				<li>
					<a href="{{url("/noticias")}}">BLOG</a>
				</li>

				<li>
					{{-- <a href="{{url("/conocenos")}}">CONÓCENOS</a> --}}
				</li>

				<li>
					<a href="#" id="go-to-contacto">CONTACTO</a>
				</li>
			</ul>
		</nav>

		<!-- <div class="search-container">
			<form>
				<a href="#" id="btn-search">
					<span>
						<svg style="width:24px;height:24px" viewBox="0 0 24 24">
							<path fill="#00e5e5" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
						</svg>
					</span>

					<span>
						buscar
					</span>
				</a>

				<input type="text" class="browser-default">
			</form>
		</div> -->
	</div>

	<div class="btn-login-container">
		<a href="{{url("/login")}}" id="btn-login">
			<span>
				<img src="{{url("img/dashboard/i-perfil.svg")}}" alt="">
			</span>
			<span>Iniciar Sesión</span>
		</a>
	</div>

	<div class="social-networks-container">
		<a href="https://www.facebook.com/Universo-Ps%C3%ADquico-104114208442533"><img src="img/commons/h-fb.svg" alt=""></a>

		<a href="https://www.instagram.com/somosuniversopsiquico/"><img src="img/commons/h-ig.svg" alt=""></a>
	</div>
</header>

<audio id="new-chat-audio" style="display: none;">
	<source src="audio/new-chat-song.mp3" type="audio/mp3">
</audio>

<div class="new-conversation-modal">
	<div class="ncm-content">
		<h2>Tienes una nueva conversación</h2>

		<p id="new-conversation-msg"></p>

		<p>¿Quieres continuar?</p>

		<div class="ncm-actions">
			<a href="#" class="ncm-button" id="btn-accept">Aceptar</a>

			<a href="#" class="ncm-button" id="btn-deny">Cancelar</a>
		</div>
	</div>
</div>

<a id="btn-whatsapp" href="https://api.whatsapp.com/send?phone=573118988139&amp;text=Buen%20d%C3%ADa.|" target="_blank">
	<svg style="width:40px;height:40px" viewBox="0 0 24 24">
		<path fill="#ffffff" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"></path>
	</svg>
</a>