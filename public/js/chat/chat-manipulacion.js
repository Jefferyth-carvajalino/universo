let timerTimeout = null;
let timerHours = 0;
let timerMinutes = 0;
let timerSeconds = 0;
function agregarMensajes(message,isCliente,isConsultor,date){
    // console.log(isCliente,isConsultor)
    isCliente = !!isCliente;
    isConsultor = !!isConsultor;
    let bubble = '';
    let writer = "cwb-me";
    if(isConsultor){
        writer = "Adviser";
    }

    bubble = `<div class="cw-bubble-row  ${writer} ">
                    <p class="cw-bubble">${message}</p>
                    <span class="bubble-time">${date}</span>
            </div >`;
	// } else if (parseInt(kindOfMsg) === 1) {
        /*
		bubble = `<div class="cw-bubble-row ${writer}">
								<div class="cw-bubble-img-container">
									<img src="${message}" class="chat-img" onclick="showImgOnModal(this)" >
								</div>
								<span class="bubble-time">${date}</span>
							</div >`;
                            */
	// }
	$('#cmb-bubbles-container').append(bubble);
	$('#cmb-bubbles-container').stop().animate({ scrollTop: $('#cmb-bubbles-container')[0].scrollHeight }, 0);
}

function renderOldMessages(oldMessages) {
	let oldMessagesDates = [];
    $('#cmb-bubbles-container').empty();
	oldMessages.forEach(message => {
		let messageDateYear = new Date(message['fecha_envio']).getFullYear();
		let messageDateMonth = new Date(message['fecha_envio']).getMonth() + 1;
		let messageDateDay = new Date(message['fecha_envio']).getDay() + 1;
		let messageFullDate = `${messageDateYear}-${(messageDateMonth < 10) ? '0' + messageDateMonth : messageDateMonth}-${(messageDateDay < 10) ? '0' + messageDateDay : messageDateDay}`;
		if (!oldMessagesDates.includes(messageFullDate)) {
			let dateString = message['fecha_envio'];

			$('#cmb-bubbles-container').append(`<div class="cw-date-row"><p>${dateString}</p></div>`);
			$('#cmb-bubbles-container').stop().animate({ scrollTop: $('#cmb-bubbles-container')[0].scrollHeight }, 0);
			oldMessagesDates.push(messageFullDate);
		}
		agregarMensajes(message['frase'],message['id_cliente'],message['id_consultor'],message['fecha_envio']);
	});
}


function runTimer() {
	timerTimeout = setTimeout(() => {
		if (((timerSeconds + 1) === 15) || ((timerSeconds + 1) === 30) || ((timerSeconds + 1) === 45) || ((timerSeconds + 1) === 60)) {
			if ((timerSeconds + 1) === 60) {
				if ((timerMinutes + 1) === 60) {
					timerHours += 1;
					timerMinutes = 0;

				} else {
					timerMinutes += 1;
				}

				timerSeconds = 0;
			} else {
				timerSeconds++;
			}

			// updateBalances(timerMinutes);

		} else {
			timerSeconds += 1;
		}
		// if (chatId) {
			// updateDurationTime({ chatId });
			renderTimer();
		// }
	}, 1000);
}

function renderTimer() {
	$('#timer-hours').text((timerHours < 10) ? `0${timerHours}` : timerHours);
	$('#timer-minutes').text((timerMinutes < 10) ? `0${timerMinutes}` : timerMinutes);
	$('#timer-seconds').text((timerSeconds < 10) ? `0${timerSeconds}` : timerSeconds);
	if (timerTimeout) {
		runTimer();
	}
}


function getDuracionActual(){
    return $('#timer-hours').text() +":" +  $('#timer-minutes').text()+":"+$('#timer-seconds').text();
}
