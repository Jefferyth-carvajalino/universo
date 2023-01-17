const buttonEnvioChat = document.querySelector('#send-msg-btn');
const userAdvicer = JSON.parse(localStorage.getItem('user'));
const chatAudio = document.getElementById('chat-audio');
sessionStorage.setItem('mode','ADVICER');
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

    let newVideo = document.getElementById('new-chat-audio');
        newVideo.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
    }, false);
    salaChat.on('esperandoSolicitud', (data) => {
        // document.querySelector("#new-chat-audio").play();

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
        newVideo.pause();
        newVideo.currentTime = 0;
        salaChat.emit("responderSolicitud",{
            asesorAcepto: false,
        });
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

    const salaChat = ws.subscribe(`chat:advicer-${userAdvicer.id}`);
    salaChat.emit("responderSolicitud",{
        token: sessionStorage.getItem('token'),
        asesorAcepto: true,
        chat_main: sessionStorage.getItem('userRequest_chat'),
        customerSelected
    });

    const parameters = {
        mensaje: `Hola, soy ${userAdvicer.nickname}. ¿En qué puedo ayudarte?`,
        token: sessionStorage.getItem('token'),
        customerSelected,
        tipo :1,
        sessionChat: sessionStorage.getItem('sessionChat')
    };

-    // MENSAJE AUTOMATICO
    salaChat.emit("enviarMensajeDesdeAdvicer",{
        ...parameters
    });


    salaChat.on('respuestaAsesor', (data) => {
        if(data.asesorAcepto){
            sessionStorage.setItem('sessionChat',data.sessionChat.id)
        }
    });


    salaChat.on('mensajeEnviado', ({data}) => {
        $('#send-msg-btn').removeClass("loading");
        $('#send-msg-btn').prop("disabled", false);
        const {
            frase,
            tipo,
            id_consultor,
            fecha_envio,
        } = data.mensaje;
        if(tipo == 2){
            $('.upload-img-layout').removeClass("active");
            $('#btn-send-img').removeClass("loading");
            $('#btn-send-img span:last-child').text("ENVIAR");
            $('#btn-send-img').prop("disabled", false);
            $('.dropify-clear').click();
        }

        agregarMensajes(frase,null,id_consultor,fecha_envio,tipo);
    });

    salaChat.on('recibirMensaje', ({data}) => {
        const {
            frase,
            tipo,
            id_cliente,
            fecha_envio,
        } = data.mensaje;
        console.log(data.mensaje)
        agregarMensajes(frase,id_cliente,null,fecha_envio,tipo);
        chatAudio.play();
    });


    salaChat.on('finalizoSesion',async (data) => {
        salaChat.emit('actualizarDuracionChat',{
            sessionChat: sessionStorage.getItem('sessionChat'),
            token: sessionStorage.getItem('token'),
            duracion: getDuracionActual()
        });

        let timerInterval
            Swal.fire({
            title: 'Chat finalizado',
            html: 'La conversación finalizó',
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                window.location.href = `/dashboard-especialista/perfil`;
            }
            })



    })

    $('#finish-chat').click(async function (e) {
		e.preventDefault();
        salaChat.emit('iniciarFinalizacionChat', {
            finalizadoAdvicer: true,
            finalizadoCliente: false
        });
	});

    runTimer();


    $('#btn-send-img').click(async function (e) {
        e.preventDefault();
        const image = $('#upload-img-input')[0].files[0];
        if (typeof image === "undefined") {
            notificacion("#upload-img-input", "Selecciona una imagen", "#upload-img-input", "bottom center", "error");
        } else {
            $('#btn-send-img').addClass("loading");
            $('#btn-send-img span:last-child').text("Enviando...");
            $('#btn-send-img').prop("disabled", true);
            const enviarMensajeFunc = (resultImg) => {
                // console.log(resultImg);
                const request = {
                    token : sessionStorage.getItem('token'),
                    customerSelected : customerSelected,
                    tipo :2,
                    mensaje: null,
                    archivo : resultImg,
                    sessionChat : sessionStorage.getItem('sessionChat')
                }

                salaChat.emit("enviarMensajeDesdeAdvicer",{
                    ...request
                });
            }
            getBase64(image,enviarMensajeFunc);

            // console.log(true);
            // salaChat.emit("enviarMensajeDesdeConsultor",{...request});
            // AL RECIBIR LA IMAGEN
        }
    });



    buttonEnvioChat.addEventListener('click',async (e) => {
        e.preventDefault();
        const inputMensaje = document.querySelector('#msg-input');
        const parameters = {
            mensaje: inputMensaje.value,
            token: sessionStorage.getItem('token'),
            customerSelected,
            tipo :1,
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

