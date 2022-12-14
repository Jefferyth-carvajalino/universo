<div class="dshb-sidebar">
	<a href="#" id="btn-sidebar-actuator">
		<img src="{{asset('img/commons/click.svg')}}" alt="">
	</a>
	<ul>
		<li>
			<a href="/dashboard-especialista/perfil/">
				<span>
					<img src="{{asset('img/dashboard/i-perfil.svg')}}" alt="">
				</span>
				<span>
					Perfil
				</span>
			</a>
		</li>
		<li>
			<a href="/dashboard-especialista/mis-ingresos/">
				<span>
					<img src="{{asset('img/dashboard/i-chat.svg')}}" alt="">
				</span>
				<span>
					Mis ingresos
				</span>
			</a>
		</li>
		<li>
			<a href="/dashboard-especialista/inbox/">
				<span>
					<img src="{{asset('img/dashboard/i-chat.svg')}}" alt="">
				</span>
				<span>
					Inbox
				</span>
			</a>
		</li>
		<li>
			<a href="/dashboard-especialista/horoscopo/" id="horoscopo-btn">
				<span>
					<img src="{{asset('img/dashboard/i-chat.svg')}}" alt="">
				</span>
				<span>
					horóscopo
				</span>
				<p id="cant-hor"></p>
			</a>
		</li>

		<li class="hidden" id="chat-link">
			<?php //echo (isset($_SESSION['activeChat'])) ? '<a href="/dashboard-especialista/chat/?chatId=' . $_SESSION['activeChat'] . '">' : '<a href="#">'; ?>
			<span>
				<img src="{{asset('img/dashboard/i-chat.svg')}}" alt="">
			</span>
			<span>
				Chat
			</span>
			</a>
		</li>

		<li id="online-status">
			<p>Estado: </p>
			<form id="online-status-form">
				<label>
					<span>Desconectado</span>
					<input type="radio" class="online-status-radio" name="online-status" id="disconnected-option" value="0" />
				</label>
				<label>
					<span>Conectado</span>
					<input type="radio" class="online-status-radio" name="online-status" id="connected-option" value="1" />
				</label>
				<label>
					<span>Ocupado</span>
					<input type="radio" class="online-status-radio" name="online-status" id="busy-option" value="2" />
				</label>
			</form>
		</li>
		<li>
			<a href="#" id="logout-btn">
				<span>
					<img src="{{asset('img/dashboard/i-cerrar-sesion.svg')}}" alt="">
				</span>
				<span>
					Cerrar Sesión
				</span>
			</a>
		</li>
	</ul>
</div>
