function receiveMessage(data, socket) {
    console.log('received message: ' + data);
	socket.broadcast.emit('message', data);
}