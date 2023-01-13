const url = "https://devdash.universopsiquico.com/api/chat";
const adviserSelected = getUrlSearch("adviser");
$.ajaxSetup({
    headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }
});


async function main(){
    setInterval(async () => {
        const mensajes = await getMessages();
        renderOldMessages(mensajes.mensajes);
    }, 2500);

}

async function getMessages(){
    let result;
    try {
        result = await $.ajax({
            url: `${url}/cliente/${adviserSelected}`,
        })
        return result
    } catch (error) {
        console.error(error)
    }

    return [];
}

async function enviarMensaje(parameters){


    let result;
    try {
        result = await $.ajax({
            url: `${url}/cliente/${adviserSelected}/enviarMensaje`,
            method: 'POST',
            data: {...parameters}
        })
        return result['status'];
    } catch (error) {
        console.error(error)
    }
    return false;
}


// $("#msg-input").emojioneArea({
// 	placeholder: "Escribe tu mensaje...",
// 	searchPosition: "bottom",
// 	shortnames: true
// });

// $("#msg-input")[0].emojioneArea.on("keyup", function (textarea, e) {
// 	if (e.keyCode == 13 && !e.shiftKey) {
// 		e.preventDefault();
// 		$('#send-msg-btn').click();
// 	}
// });

const buttonEnvio = document.querySelector('#send-msg-btn');
buttonEnvio.addEventListener('click',async (e) => {
    e.preventDefault();
    $('#send-msg-btn').addClass("loading");
	$('#send-msg-btn').prop("disabled", true);
    const inputMensaje = document.querySelector('#msg-input');
    const parameters = {
        mensaje: inputMensaje.value
    };
    const estado = await enviarMensaje({...parameters});
    if(estado){
        inputMensaje.value = "";
    }else{

    }

    $('#send-msg-btn').removeClass("loading");
    $('#send-msg-btn').prop("disabled", false);
    const mensajes = await getMessages();
    renderOldMessages(mensajes.mensajes);
});


main();
