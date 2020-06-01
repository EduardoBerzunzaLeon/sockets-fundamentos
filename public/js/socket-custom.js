var socket = io();

// Los on son para escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Los emit son para enviar para informacion
socket.emit('enviarMensaje', {
    usuario: 'Eduardo',
    mensaje: 'Hola mundo'
}, function(res) {
    console.log(res);
});