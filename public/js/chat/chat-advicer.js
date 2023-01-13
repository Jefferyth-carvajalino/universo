(() => {mainChat()})();

const buttonEnvioChat = document.querySelector('#send-msg-btn');


async function mainChat(){

    await iniciarWebsockets();
}


async function iniciarWebsockets(){

    // ABRIR VENTANA DE ESPERA

    // $('.loader-wrapper').addClass("active");

    // TRAER HISTORIAL DE MENSAJES
    const mensajes = await getMessages();
    renderOldMessages(mensajes.mensajes);
    const customerSelected = getUrlSearch("customer");

    // const ws = adonis.Ws('wss://chatnew.universopsiquico.com',{
    const ws = adonis.Ws('ws://localhost:3333',{
        path: 'adonis-ws'
    }).connect();

    let isConnected = false

    ws.on('open', () => {
        isConnected = true
    });

    ws.on('close', () => {
        isConnected = false
    });


    const salaChat = ws.subscribe(`chat:advicer-${adviserSelected}`);

    salaChat.on('esperandoSolicitud', (data) => {
        $('.new-conversation-modal').addClass("active");
    });

    salaChat.on('solicitudAceptada', (data) => {
        $('.new-conversation-modal').addClass("active");
    });

    salaChat.on('recibirMensaje', (data) => {

    });

    salaChat.on('mensajeEnviado', ({data}) => {
        $('#send-msg-btn').removeClass("loading");
        $('#send-msg-btn').prop("disabled", false);
        const {
            frase,
            id_consultor,
            fecha_envio,
        } = data.mensaje;
        agregarMensajes(frase,null,id_consultor,fecha_envio);
    });


    buttonEnvioChat.addEventListener('click',async (e) => {
        e.preventDefault();
        const inputMensaje = document.querySelector('#msg-input');
        const parameters = {
            mensaje: inputMensaje.value,
            token: sessionStorage.getItem('token'),
            adviserSelected
        };

        salaChat.emit("enviarMensajeDesdeAdvicer",{
           ...parameters
        });

        $('#send-msg-btn').addClass("loading");
        $('#send-msg-btn').prop("disabled", true);
    });
}

async function getMessages(){
    $.ajaxSetup({
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    });
    const urlChat = "https://devdash.universopsiquico.com/api/chat";
    const customerSelected = getUrlSearch("customer");
    let result;
    try {
        result = await $.ajax({
            url: `${urlChat}/consultor/${customerSelected}`,
        })
        return result
    } catch (error) {
        console.error(error)
    }
    return [];
}

