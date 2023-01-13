<script src="https://unpkg.com/regenerator-runtime@0.13.9/runtime.js"></script>
<script src="https://unpkg.com/@adonisjs/websocket-client"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">

    const ws = adonis.Ws('ws://localhost:3333',{
        path: 'adonis-ws'
    }).connect();

    let isConnected = false

    ws.on('open', () => {
        isConnected = true
    })

    ws.on('close', () => {
        isConnected = false
    })

    const adviserSelected = getUrlSearch("adviser");

    const salaChat = ws.subscribe(`chat:advicer-1`);
    salaChat.emit('solicitado',{
        myUsuario: 'Hola'
    });


</script>
