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
	<link rel="stylesheet" href="/src/css/dshb-chat-especialista.min.css">

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

	<main>
		<section id="s-dashboard">
			<?php include_once $_SERVER["DOCUMENT_ROOT"] . "/src/commons/dashboard-especialista/dshb-sidebar.php"; ?>

			<div class="dshb-content-container">
				<div id="chat-container">
					<div class="chat-panel" id="chat-right-panel">
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
								<button id="btn-send-img">
									<span>
										<svg class="without-loading-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
											<path fill="#00e5e5" d="M4 6.03L11.5 9.25L4 8.25L4 6.03M11.5 14.75L4 17.97V15.75L11.5 14.75M2 3L2 10L17 12L2 14L2 21L23 12L2 3Z" />
										</svg>

										<svg class="loading-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
											<path fill="#00e5e5" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
										</svg>
									</span>

									<span>
										ENVIAR
									</span>
								</button>
							</div>
						</div>

						<div class="see-img-modal" id="simg-modal">
							<span class="close-img-modal">&times;</span>
							<img class="img-modal-content" id="img-modal" />
						</div>

						<audio id="chat-audio" style="display: none;">
							<source src="/src/audio/chat-song.mp3" type="audio/mp3">
						</audio>

						<div class="cp-top">
							<div class="cp-img-active-chat">
								<img src="/src/img/user-default.png" alt="" id="customer-chat-img">
							</div>

							<div class="cp-top-2">
								<div>
									<div class="cp-name-active-chat">
										<p id="customer-chat-name"></p>

										<p id="customer-chat-genre"></p>
									</div>

									<div class="cp-customer-zodiac-container">
										<div>
											<img src="/src/img/horoscopo/tauro.svg" id="zodiac-icon" alt="">
										</div>

										<p id="customer-zodiac"></p>
									</div>
								</div>

								<div>
									<p id="chat-total-cost">$0</p>

									<div class="timer">
										<p id="timer-hours">--</p>
										<span>:</span>
										<p id="timer-minutes">--</p>
										<span>:</span>
										<p id="timer-seconds">--</p>
									</div>

									<button id="finish-chat">Finalizar</button>
								</div>
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

								<button id="send-msg-btn">
									<svg class="without-loading-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
										<path fill="#999999" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
									</svg>

									<svg class="loading-icon" style="width:24px;height:24px" viewBox="0 0 24 24">
										<path fill="#00e5e5" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
									</svg>
								</button>
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
	<script src="/src/js/dashboard-especialista/chat-script.js"></script>
</body>

</html>