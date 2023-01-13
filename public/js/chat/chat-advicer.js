const buttonEnvioChat = document.querySelector('#send-msg-btn');
const userAdvicer = JSON.parse(localStorage.getItem('user'));
(() => {mainChat()})();
async function mainChat(){
    const pathname = window.location.pathname;
    if(pathname.includes('chat?customer=')){
        await iniciarChatWebsockets();
    }else{
        await webSocketsAlways();
    }
}

async function webSocketsAlways(){
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
    // console.log(userAdvicer)
    const salaChat = ws.subscribe(`chat:advicer-${userAdvicer.id}`);

    salaChat.on('esperandoSolicitud', (data) => {
        // document.querySelector("#new-chat-audio").play();
        // var newVideo = document.getElementById('new-chat-audio');
        //     newVideo.addEventListener('ended', function() {
        //         this.currentTime = 0;
        //         this.play();
        //     }, false);

        // newVideo.play();

        localStorage.setItem('userRequest',JSON.stringify(data.dataCustomer));
        $('.new-conversation-modal').addClass("active");
        $('#new-conversation-msg').text(`${data.dataCustomer.name} desea iniciar una conversación contigo.`);
    });

    $('#btn-accept').click(function (e) {
        e.preventDefault();
        const userRequest = JSON.parse(localStorage.getItem('userRequest'));
        localStorage.removeItem('userRequest');
        window.location.href = `/dashboard-especialista/chat?customer=${userRequest.id}`;
    });
    $('#btn-deny').click(function (e) {
        e.preventDefault();
        localStorage.removeItem('userRequest');
        $('.new-conversation-modal').removeClass("active");
        salaChat.emit("responderSolicitud",false);
    });



}

async function iniciarChatWebsockets(){

    // ABRIR VENTANA DE ESPERA

    $('.loader-wrapper').addClass("active");
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

    console.log(userAdvicer);
    const salaChat = ws.subscribe(`chat:advicer-${userAdvicer.id}`);
    console.log("hola")
    salaChat.emit("responderSolicitud",true);

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

    salaChat.on('recibirMensaje', ({data}) => {
        const {
            frase,
            id_cliente,
            fecha_envio,
        } = data.mensaje;
        agregarMensajes(frase,id_cliente,null,fecha_envio);
    });


    buttonEnvioChat.addEventListener('click',async (e) => {
        e.preventDefault();
        const inputMensaje = document.querySelector('#msg-input');
        const parameters = {
            mensaje: inputMensaje.value,
            token: sessionStorage.getItem('token'),
            customerSelected
        };

        salaChat.emit("enviarMensajeDesdeAdvicer",{
           ...parameters
        });

        $('#send-msg-btn').addClass("loading");
        $('#send-msg-btn').prop("disabled", true);
        inputMensaje.value = "";
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

