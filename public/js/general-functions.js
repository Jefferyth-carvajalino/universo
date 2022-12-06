/**
 * @param key
 * @return keyValue/null
 */
function getUrlSearch(key) {
	key = key.replace(/[\[]/, '\\[');
	key = key.replace(/[\]]/, '\\]');
	var pattern = "[\\?&]" + key + "=([^&#]*)";
	var regex = new RegExp(pattern);
	var url = unescape(window.location.href);
	var results = regex.exec(url);

	if (results === null) {
		return null;
	}

	return results[1];
}

/**
 * Permite ingresar solo números
 */
function soloNumeros(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^[0-9]*$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar solo letras
 */
function soloLetras(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([A-Za-zÑñáéíóúÁÉÍÓÚ ]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar solo usuario
 */
function soloUsuario(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([A-Za-zÑñáéíóúÁÉÍÓÚ0-9]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar solo NIT
 */
function soloNit(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9-]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar correos
 */
function soloEmail(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9A-Za-zÑñáéíóúÁÉÍÓÚ.@-_]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar solo letras y números
 */
function soloLetrasNumeros(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9A-Za-zÑñáéíóúÁÉÍÓÚ,. ]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar nombres de productos
 */
function soloNombresProductos(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9A-Za-zÑñáéíóúÁÉÍÓÚ,.\(\)\/ ]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar solo contraseñas
 */
function soloPass(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9A-Za-zÑñáéíóúÁÉÍÓÚ@-_;.]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite ingresar solo fechas
 */
function soloFecha(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9/]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite solo direccion
 */
function soloDireccion(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9A-Za-zÑñáéíóúÁÉÍÓÚ#. ]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite solo pagina web
 */
function soloDireccionWeb(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([0-9A-Za-z-./:]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * Permite validar un campo select
 */
function validarSelect(texto, identificador) {

	if (texto != '') {
		$(identificador).val(texto);
	}
}

/**
 * Permite validar correo electrónico
 */
function validarEmail(txtMail) {
	var patron = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

	return patron.test(txtMail);
}

/**
 * Permite que solo se ingrese un maximo de caracteres en el input
 */
function validaMaximo(elemento, numMax) {
	var numTxt = elemento.val().length; // Número de caracteres actuales en el input
	var numero_maximo = numMax - 1;

	if (numTxt > numero_maximo) {
		return false;
	} else {
		return true;
	}
}

function validaMayorDeEdad(userBirthDate) {
	const thisYear = new Date().getFullYear();
	const eighteenYearsAgo = thisYear - 18;
	let userYear = new Date(userBirthDate).getFullYear();

	if (userYear > eighteenYearsAgo) {
		return false;
	}
	return true;
}

/**
 * Genera una notificacion con la librería "NOTIFY.JS"
 * Param @id String -> Id del elemento sobre el que se va ubicar
 * Param @text String -> Texto que se desea mostrar
 * Param @arg_focus String -> elemento al que se le debe dar el foco
 * Param @position String ["y x"] {"bottom center"}
 * Param @classColor String {success/error/info/warn}
 */
function notificacion(arg_id, arg_text, arg_focus, arg_position, arg_classColor, arg_segundos) {

	if (arg_focus != "") {
		$(arg_id).focus();
	}

	if (arg_segundos == undefined) {
		arg_segundos = 1800;

	}

	$(arg_id).notify(arg_text, {
		position: arg_position,
		className: arg_classColor,
		autoHideDelay: arg_segundos
	});
}

/**
 * This function capitalize a string
 * @return String capitalized
 */
function capitalizeString(arg_string) {
	return arg_string.charAt(0).toUpperCase() + arg_string.slice(1);
}

/**
 * This funciton generate a notification "AFBGD notify"
 */
function afbgdNotify(element, msg) {
	$(element).siblings(".input-msg").html("<p>" + msg + "</p>");
	$(element).focus();

	setTimeout(() => {
		$(element).siblings(".input-msg").html("");
	}, 2000);
}

/**
 * Permite ingresar solo nombres en tarjetas de credito
 */
function soloNombreTarjeta(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8) return true;
	patron = /^([A-Za-z ]+)$/;

	te = String.fromCharCode(tecla);
	return patron.test(te);
}

/**
 * these twice functions allow customForm functionality
 */
function customFormFunc() {
	$('.form-field .afbgd-custom-input').each(function (index) {
		verifyInputValue($(this));

		$(this).on({
			focus: function () {
				$(this).siblings("label").addClass("on-focus");
			},
			focusout: function () {
				verifyInputValue($(this));
			}
		});
	});
}

function verifyInputValue(input) {
	if ($(input).val() != "") {
		$(input).siblings("label").addClass("on-focus");

	} else {
		$(input).siblings("label").removeClass("on-focus");
	}
}

/**
 * Valida tarjeta VISA
 */
function validateVisa(cardNumber) {
	let pattern = /^4[0-9]{12}(?:[0-9]{3})?$/;

	return pattern.test(cardNumber);
}

/**
 * Valida tarjeta VISA Debito
 */
function validateVisaDebit(cardNumber) {
	let pattern = /\\d{16}$/;

	return pattern.test(cardNumber);
}

/**
 * Valida tarjeta DINERSCLUB
 */
function validateDiners(cardNumber) {
	let pattern = /(^[35](?:0[0-5]|[68][0-9])[0-9]{11}$)|(^30[0-5]{11}$)|(^3095(\\d{10})$)|(^36{12}$)|(^3[89](\\d{12})$)/;

	return pattern.test(cardNumber);
}

/**
 * Valida tarjeta MASTERCARD
 */
function validateMastercard(cardNumber) {
	let pattern = /^(5[1-5]\\d{14}$)|^(2(?:2(?:2[1-9]|[3-9]\\d)|[3-6]\\d\\d|7(?:[01]\\d|20))\\d{12}$)/;

	return pattern.test(cardNumber);
}

/**
 * Valida tarjeta AMERICANEXPRESS
 */
function validateAmex(cardNumber) {
	let pattern = /^(3[47]\\d{13})$/;

	return pattern.test(cardNumber);
}

/**
 * Valida tarjeta CENCOSUD
 * It's validate when return FALSE
 */
function validateCencosud(cardNumber) {
	let pattern = /^603493(\\d{10})$/;

	return pattern.test(cardNumber);
}

/**
 * Valida tarjeta CODENSA
 * It's validate when return FALSE
 */
function validateCodensa(cardNumber) {
	let pattern = /^590712(\\d{10})$/;

	return pattern.test(cardNumber);
}

/**
 * Valida tarjeta FALABELLA
 * It's validate when return FALSE
 */
function validateFalabella(cardNumber) {
	let pattern = /^627180(\\d{10})$/;

	return pattern.test(cardNumber);
}

function isMobile() {
	return (
		(navigator.userAgent.match(/Android/i)) ||
		(navigator.userAgent.match(/webOS/i)) ||
		(navigator.userAgent.match(/iPhone/i)) ||
		(navigator.userAgent.match(/iPod/i)) ||
		(navigator.userAgent.match(/iPad/i)) ||
		(navigator.userAgent.match(/BlackBerry/i))
	);
}

$('#btn-goback').click(function () {
	window.history.back();
});

function generateStarsHtml(stars = 0) {
	// console.log("STARS: ", stars);
	return starsHtml = `<span class="${(stars > 1) ? 'checked' : ''}">
								<svg style="width:24px;height:24px" viewBox="0 0 24 24">
									<path fill="#00E5E5"
										d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
									</path>
								</svg>
							</span>
							<span class="${(stars >= 2) ? 'checked' : ''}">
								<svg style="width:24px;height:24px" viewBox="0 0 24 24">
									<path fill="#00E5E5"
										d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
									</path>
								</svg>
							</span>
							<span class="${(stars >= 3) ? 'checked' : ''}">
								<svg style="width:24px;height:24px" viewBox="0 0 24 24">
									<path fill="#00E5E5"
										d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
									</path>
								</svg>
							</span>
							<span class="${(stars >= 4) ? 'checked' : ''}">
								<svg style="width:24px;height:24px" viewBox="0 0 24 24">
									<path fill="#00E5E5"
										d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
									</path>
								</svg>
							</span>
							<span class="${(stars === 5) ? 'checked' : ''}">
								<svg style="width:24px;height:24px" viewBox="0 0 24 24">
									<path fill="#00E5E5"
										d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z">
									</path>
								</svg>
							</span>`
}

$("#go-to-contacto").click(function (event) {
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $("#footer").offset().top - 90
	}, 950);
});