const { comprobarJWT } = require('../helpers/jwt');
const { io } = require('../index');
const {usuarioConectado, usuarioDesconectado, grabarMensaje} = require('../controllers/socket');

//Mensajes de Sockets
io.on('connection', (client) => {
    console.log('Cliente conectado');
    const [ valido, uid] = comprobarJWT(client.handshake.headers['x-token'] )
    
    //verificar autenticación
if (!valido) { return client.disconnect(); }

//cliente autenticado
usuarioConectado(uid);


//ingresar al usuario a una sala en particular
client.join(uid);


// escuchar del cliente el mensaje personal
client.on('mensaje-personal', async( payload ) => {

    await grabarMensaje(payload);
io.to(payload.para).emit('mensaje-personal', payload);
})


    client.on('disconnect', () => {
        usuarioDesconectado(uid);
    });

    // client.on('mensaje', (payload) => {
    // console.log('Mensaje', payload);
    // io.emit('mensaje', { admin: 'Nuevo mensaje'});
    // });

});

