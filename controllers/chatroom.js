function home(req, res) {

    var rooms = getRoom();
    res.render('chathome', {user: req.session.user, rooms: rooms});
}

function login(req, res) {
    res.render('login');
}

function signup(req, res) {
    res.render('signup');
}

function chatroom(req, res) {

    var room = req.param('name');
    var rooms = getRoom();
    if(rooms.indexOf(room) == -1)
        openNewRoom(room);
    res.render('chatroom', {user: req.session.user, room: room});
}


function getRoom() {
    var rooms = [];
    for(room in global.io.rooms) {
        if(room.indexOf('/') == 0)
            room = room.substring(1);
        rooms.push(room);
    }
    return rooms;
}

function openNewRoom(room) {

    global.io.of('/' + room).on('connection', function(socket) {

        if (!socket) {
            var msg = 'Error in socket connection.'
            logger.error(msg);
            throw msg;
        }

        socket.on('msg', function(data) {
            socket.broadcast.emit('message', data);
        });

    });
}