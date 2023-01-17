const buttonEnvioChat = document.querySelector('#send-msg-btn');
const userAdvicer = JSON.parse(localStorage.getItem('user'));
const chatAudio = document.getElementById('chat-audio');
(() => {mainChat()})();
async function mainChat(){
    const pathname = window.location.pathname;
    console.log(pathname.includes('chat'),pathname);
    if(pathname.includes('chat')){
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
        var newVideo = document.getElementById('new-chat-audio');
            newVideo.addEventListener('ended', function() {
                this.currentTime = 0;
                this.play();
            }, false);

        newVideo.play();

        sessionStorage.setItem('userRequest',JSON.stringify(data.dataCustomer));
        sessionStorage.setItem('userRequest_chat',JSON.stringify(data.chat_main));
        $('.new-conversation-modal').addClass("active");
        $('#new-conversation-msg').text(`${data.dataCustomer.name} desea iniciar una conversación contigo.`);
    });

    $('#btn-accept').click(function (e) {
        e.preventDefault();
        const userRequest = JSON.parse(localStorage.getItem('userRequest'));
        sessionStorage.removeItem('userRequest');
        window.location.href = `/dashboard-especialista/chat?customer=${userRequest.id}`;
    });
    $('#btn-deny').click(function (e) {
        e.preventDefault();
        sessionStorage.removeItem('userRequest');
        sessionStorage.removeItem('userRequest_chat');
        $('.new-conversation-modal').removeClass("active");
        salaChat.emit("responderSolicitud",{
            asesorAcepto: false,
        });
    });



}

async function iniciarChatWebsockets(){

    // ABRIR VENTANA DE ESPERA
    console.log("hola");

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

    const salaChat = ws.subscribe(`chat:advicer-${userAdvicer.id}`);
    salaChat.emit("responderSolicitud",{
        token: sessionStorage.getItem('token'),
        asesorAcepto: true,
        chat_main: sessionStorage.getItem('userRequest_chat'),
        customerSelected
    });


    salaChat.on('respuestaAsesor', (data) => {
        if(data.asesorAcepto){
            sessionStorage.setItem('sessionChat',data.sessionChat.id)
        }
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

    salaChat.on('recibirMensaje', ({data}) => {
        const {
            frase,
            id_cliente,
            fecha_envio,
        } = data.mensaje;
        agregarMensajes(frase,id_cliente,null,fecha_envio);
        chatAudio.play();
    });


    salaChat.on('finalizoSesion',async (data) => {
        console.log(data);
        salaChat.emit('actualizarDuracionChat',{
            sessionChat: sessionStorage.getItem('sessionChat'),
            token: sessionStorage.getItem('token'),
            duracion: getDuracionActual()
        });

        Swal.fire({
			icon: 'warning',
			title: 'Chat finalizado',
			text: `La conversación finalizó`
		});

    })

    $('#finish-chat').click(async function (e) {
		e.preventDefault();
        salaChat.emit('iniciarFinalizacionChat', {
            finalizadoAdvicer: true,
            finalizadoCliente: false
        });
	});

    runTimer();



    buttonEnvioChat.addEventListener('click',async (e) => {
        e.preventDefault();
        const inputMensaje = document.querySelector('#msg-input');
        const parameters = {
            mensaje: inputMensaje.value,
            token: sessionStorage.getItem('token'),
            customerSelected,
            sessionChat: sessionStorage.getItem('sessionChat')
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

