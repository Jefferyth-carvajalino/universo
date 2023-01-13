<audio  preload="auto" muted="muted" id="new-chat-audio">
	<source muted src="{{asset('src/audio/new-chat-song.mp3')}}" type="audio/mp3">
</audio>
<script src="https://unpkg.com/regenerator-runtime@0.13.9/runtime.js"></script>
<script src="https://unpkg.com/@adonisjs/websocket-client"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    (() => {
        Notification.requestPermission().then(function(result) {
            console.log(result);
        });
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

        const user = JSON.parse(localStorage.getItem('user'));
        const salaChat = ws.subscribe(`chat:advicer-${user.id}`);
        // salaChat.emit('estadoSala', {
        //     disponible: true,
        // });

        salaChat.on('solicitado', (data) => {
            var text = '¡OYE! Tu tarea "' + '" ahora está vencida.';
            var notification = new Notification('Lista de tareas', { body: text });
            // alert('Hola mundo');
            playAudio();
            // setTimeout(() => {
            //     pauseAudio();
            // }, 2500);

        });

    })()

</script>
