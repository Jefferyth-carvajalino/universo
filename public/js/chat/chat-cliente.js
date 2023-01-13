const buttonEnvioChat = document.querySelector('#send-msg-btn');
const userCustomer = JSON.parse(localStorage.getItem('user'));
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

    ws.on('open', () => {
        isConnected = true
    });

    ws.on('close', () => {
        isConnected = false
    });


    const salaChat = ws.subscribe(`chat:advicer-${adviserSelected}`);
    salaChat.emit('solicitarAsesor', {
        customer: userCustomer.id,
        dataCustomer: {...userCustomer}
    });

    salaChat.on('respuestaAsesor', (data) => {
        console.log(data);
        if(data){
            $('.loader-wrapper').removeClass("active");
        }else{

        }
    });

    salaChat.on('recibirMensaje', ({data}) => {
        const {
            frase,
            id_consultor,
            fecha_envio,
        } = data.mensaje;
        agregarMensajes(frase,null,id_consultor,fecha_envio);
    });


    salaChat.on('mensajeEnviado', ({data}) => {
        $('#send-msg-btn').removeClass("loading");
        $('#send-msg-btn').prop("disabled", false);
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
            adviserSelected
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


