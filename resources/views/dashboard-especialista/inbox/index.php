<?php
session_start();

if (!isset($_SESSION['id_user']) && ($_SESSION['kind_user'] != "adviser")) {
	header('Location: /log-in/');
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>Universo Psiquico - Chat</title>

	<link rel="stylesheet" href="/src/libs/emojionearea/emojionearea.min.css">
	<link rel="stylesheet" href="/src/libs/dropify/css/dropify.min.css">
	<link rel="stylesheet" href="/src/css/dshb-inbox-especialista.min.css">

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
	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/header.php"; ?>

	<main class="dshb-main">
		<section id="s-dashboard">
			<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/dashboard-especialista/dshb-sidebar.php"; ?>

			<div class="dshb-content-container">
				<div id="chat-container">
					<div class="chat-panel" id="chat-left-panel">
						<div class="cp-top">
							<div class="search-container">
								<form>
									<a href="#" id="btn-chat-search">
										<span>
											<svg style="width:24px;height:24px" viewBox="0 0 24 24">
												<path fill="#00e5e5" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
											</svg>
										</span>

										<span>
											buscar
										</span>
									</a>

									<input type="text">
								</form>
							</div>
						</div>

						<div id="chat-list-container">
							<ul id="chats-list">
								<!-- <li class="chat-item unread reading" data-chat="1" onclick="getConversation(this);">
										<div class="client-profile-img-container">
											<img src="/src/img/asesores/antonia.png" alt="">
										</div>

										<div class="client-profile-info">
											<div class="cp-name-row">
												<p>
													Antonia
												</p>

												<span>
													5:00 p.m
												</span>
											</div>

											<div class="cp-last-message">
												<p>
													Quiero saber sobre mi futuro
												</p>

												<div class="unread-icon-container">
													<div>
														<p class="unread-msg">1</p>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li class="chat-item" data-chat="1" onclick="getConversation(this);">
										<div class="client-profile-img-container">
											<img src="/src/img/asesores/antonia.png" alt="">
										</div>

										<div class="client-profile-info">
											<div class="cp-name-row">
												<p>
													Antonia
												</p>

												<span>
													5:00 p.m
												</span>
											</div>

											<div class="cp-last-message">
												<p>
													Quiero saber sobre mi futuro
												</p>

												<div class="unread-icon-container">
													<div>
														<p class="unread-msg">1</p>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li class="chat-item" data-chat="1" onclick="getConversation(this);">
										<div class="client-profile-img-container">
											<img src="/src/img/asesores/antonia.png" alt="">
										</div>

										<div class="client-profile-info">
											<div class="cp-name-row">
												<p>
													Antonia
												</p>

												<span>
													5:00 p.m
												</span>
											</div>

											<div class="cp-last-message">
												<p>
													Quiero saber sobre mi futuro
												</p>

												<div class="unread-icon-container">
													<div>
														<p class="unread-msg">1</p>
													</div>
												</div>
											</div>
										</div>
									</li> -->
							</ul>
						</div>
					</div>

					<div class="chat-panel hidden" id="chat-right-panel">
						<div class="upload-img-layout">
							<div class="close-uplimglayout-container">
								<button id="btn-close-uplimglayout">
									<svg style="width:24px;height:24px" viewBox="0 0 24 24">
										<path fill="#333333" d="M4 20H18V22H4C2.9 22 2 21.11 2 20V6H4V20M20.22 2H7.78C6.8 2 6 2.8 6 3.78V16.22C6 17.2 6.8 18 7.78 18H20.22C21.2 18 22 17.2 22 16.22V3.78C22 2.8 21.2 2 20.22 2M19 13.6L17.6 15L14 11.4L10.4 15L9 13.6L12.6 10L9 6.4L10.4 5L14 8.6L17.6 5L19 6.4L15.4 10L19 13.6Z" />
									</svg>
								</button>
							</div>

							<div class="upload-img-container">
								<input type="file" class="dropify" name="upload-img-input" id="upload-img-input">
							</div>

							<div class="upload-img-btn-container">
								<a href="#" id="btn-send-img">
									<span>
										<svg style="width:24px;height:24px" viewBox="0 0 24 24">
											<path fill="#00e5e5" d="M4 6.03L11.5 9.25L4 8.25L4 6.03M11.5 14.75L4 17.97V15.75L11.5 14.75M2 3L2 10L17 12L2 14L2 21L23 12L2 3Z" />
										</svg>
									</span>

									<span>
										ENVIAR
									</span>
								</a>
							</div>
						</div>

						<div class="cp-top">
							<a href="#" id="btn-back-chatlist">
								<svg style="width:24px;height:24px" viewBox="0 0 24 24">
									<path fill="#252947" d="M5,13L9,17L7.6,18.42L1.18,12L7.6,5.58L9,7L5,11H21V13H5M21,6V8H11V6H21M21,16V18H11V16H21Z" />
								</svg>
							</a>

							<div class="cp-img-active-chat">
								<img src="/src/img/asesores/luna.png" alt="" id="customer-chat-img">
							</div>

							<div class="cp-name-active-chat">
								<p id="customer-chat-name"></p>
							</div>
						</div>

						<div class="chat-message-box">
							<div id="cmb-bubbles-container">
								<!-- <div class="cw-bubble-row">
										<p class="cw-bubble">
											Bienvenido, en qué puedo ayudarte? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptatum dignissimos itaque consectetur, asperiores nostrum consequatur, nam odit quae error, illum soluta molestiae neque? Placeat suscipit labore quam hic minus!
										</p>

										<span class="bubble-time">11:00 p.m</span>
									</div>

									<div class="cw-bubble-row cwb-me">
										<p class="cw-bubble">
											Hola, por favor quiero esto
										</p>

										<span class="bubble-time">11:05 p.m</span>
									</div> -->
							</div>
						</div>

						<div class="chat-text-input-container">
							<form>
								<textarea name="msg-input" id="msg-input" cols="30" rows="10"></textarea>

								<a href="#" id="send-msg-btn">
									<svg style="width:24px;height:24px" viewBox="0 0 24 24">
										<path fill="#999999" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
									</svg>
								</a>
							</form>

							<div id="files-shot-container">
								<a href="#" id="file-btn">
									<svg style="width:24px;height:24px" viewBox="0 0 24 24">
										<path fill="#999999" d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>



	<!-- Scripts -->
	<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/js/commons-script.html"; ?>

	<script>
		$('#btn-sidebar-actuator').click(function(e) {
			e.preventDefault();

			$('.dshb-sidebar').toggleClass("show");
		});
	</script>
	<script src="/src/libs/emojionearea/emojione.min.js"></script>
	<script src="/src/libs/emojionearea/emojionearea.min.js"></script>
	<script src="/src/libs/dropify/js/dropify.min.js"></script>
	<script src="/src/js/dshb-commons-script.js"></script>
	<script src="/src/js/dashboard-especialista/dshb-inbox-script.js"></script>
</body>

</html>