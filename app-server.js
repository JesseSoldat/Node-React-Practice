var express = require('express');

var app = express();

var title = 'Untitled Presentation';

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	socket.emit('welcome', {
		title: title
	});
});