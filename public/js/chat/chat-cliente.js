const buttonEnvioChat = document.querySelector('#send-msg-btn');
const userCustomer = JSON.parse(localStorage.getItem('user'));
const chatAudio = document.getElementById('chat-audio');
const formCalificacion = document.querySelector("#review-form");
let finalizacionSesion = false;
let sesionRechazada = false;
sessionStorage.setItem('mode','CLIENT');
(() => {mainChat()})();


async function mainChat(){
    await iniciarWebsockets();
}


async function iniciarWebsockets(){

    // ABRIR VENTANA DE ESPERA
    $('.loader-wrapper').addClass("active");

    // TRAER HISTORIAL DE MENSAJES
    const mensajes = await getMessages();
    renderOldMessages(mensajes.mensajes);
    const adviserSelected = getUrlSearch("adviser");

    // const ws = adonis.Ws('wss://chatnew.universopsiquico.com',{
    const ws = adonis.Ws('ws://localhost:3333',{
        path: 'adonis-ws'
    }).connect();

    let isConnected = false



    const salaChat = ws.subscribe(`chat:advicer-${adviserSelected}`);
    salaChat.emit('solicitarAsesor', {
        customer: userCustomer.id,
        chat_main: mensajes.chat.id,
        dataCustomer: {...userCustomer}
    });

    salaChat.on('respuestaAsesor', (data) => {
        if(data.asesorAcepto){
            $('.loader-wrapper').removeClass("active");
            sessionStorage.setItem('sessionChat',data.sessionChat.id)
        }else{
            $('.loader-wrapper').removeClass("active");
            finalizacionSesion = true;
            let timerInterval
            Swal.fire({
            title: 'Asesor no disponible',
            html: 'Lo sentimos el asesor no se encuentra disponible en este momento.',
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
                window.location.href = `/dashboard-consultor/buscar-asesor`;
            }
            })
        }
    });

    salaChat.on('recibirMensaje', ({data}) => {
        const {
            frase,
            tipo,
            id_consultor,
            fecha_envio,
        } = data.mensaje;
        agregarMensajes(frase,null,id_consultor,fecha_envio,tipo);
        chatAudio.play();
    });


    salaChat.on('mensajeEnviado', ({data}) => {
        $('#send-msg-btn').removeClass("loading");
        $('#send-msg-btn').prop("disabled", false);
        const {
            frase,
            tipo,
            id_cliente,
            fecha_envio,
        } = data.mensaje;
        if(tipo == 2){
            $('.upload-img-layout').removeClass("active");
            $('#btn-send-img').removeClass("loading");
            $('#btn-send-img span:last-child').text("ENVIAR");
            $('#btn-send-img').prop("disabled", false);
            $('.dropify-clear').click();
        }
        agregarMensajes(frase,id_cliente,null,fecha_envio,tipo);
    });

    salaChat.on('finalizoSesion',async (data) => {
        finalizacionSesion = true;
        Swal.fire({
			icon: 'warning',
			title: 'Chat finalizado',
			text: `La conversación finalizó`
		});
        $('.rate-modal').addClass('active');
    })


    window.addEventListener("beforeunload", function (e) {
        if( finalizacionSesion == false ){
            salaChat.emit('iniciarFinalizacionChat', {
                finalizadoAdvicer: false,
                finalizadoCliente: true
            });
        }
    });


    $('#finish-chat').click(async function (e) {
		e.preventDefault();
        salaChat.emit('iniciarFinalizacionChat', {
            finalizadoAdvicer: false,
            finalizadoCliente: true
        });
	});

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
                    adviserSelected : adviserSelected,
                    tipo :2,
                    mensaje: null,
                    archivo : resultImg,
                    sessionChat : sessionStorage.getItem('sessionChat')
                }

                salaChat.emit("enviarMensajeDesdeConsultor",{
                    ...request
                });
            }
            getBase64(image,enviarMensajeFunc);
        }
    });



    formCalificacion.addEventListener('submit', (e) => {
        e.preventDefault();
        const rateSelected = $('input[name=rate]:checked').val();
	    const comment = $('#comment').val();
        const request = {
            rateSelected,
            comment,
            token: sessionStorage.getItem('token'),
            sessionChat: sessionStorage.getItem('sessionChat')
        }
        salaChat.emit('calificarSesion',{...request});
    })

    salaChat.on('calificacionEstado',(data) => {
        $('.rate-modal').removeClass('active');
        let timerInterval
            Swal.fire({
            title: 'Calificación realizada',
            html: 'Mejoramos gracias a tus comentarios, muchas gracias!.',
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
                window.location.href = `/dashboard-consultor/buscar-asesor`;
            }
            })
    });




    buttonEnvioChat.addEventListener('click', (e) => {
        e.preventDefault();
        const inputMensaje = document.querySelector('#msg-input');
        const parameters = {
            mensaje: inputMensaje.value,
            token: sessionStorage.getItem('token'),
            adviserSelected,
            tipo :1,
            sessionChat: sessionStorage.getItem('sessionChat')
        };
        salaChat.emit("enviarMensajeDesdeConsultor",{
           ...parameters
        });

        $('#send-msg-btn').addClass("loading");
        $('#send-msg-btn').prop("disabled", true);
        inputMensaje.value = "";

        // ENVIO MENSAJE

        // const mensajes = await getMessages();
        // renderOldMessages(mensajes.mensajes);
    });
}

async function getMessages(){
    $.ajaxSetup({
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
    });
    const urlChat = "https://devdash.universopsiquico.com/api/chat";
    const adviserSelected = getUrlSearch("adviser");
    let result;
    try {
        result = await $.ajax({
            url: `${urlChat}/cliente/${adviserSelected}`,
        })
        return result
    } catch (error) {
        console.error(error)
    }
    return [];
}

// async function enviarMensaje(parameters){


//     let result;
//     try {
//         result = await $.ajax({
//             url: `${url}/cliente/${adviserSelected}/enviarMensaje`,
//             method: 'POST',
//             data: {...parameters}
//         })
//         return result['status'];
//     } catch (error) {
//         console.error(error)
//     }
//     return false;
// }


