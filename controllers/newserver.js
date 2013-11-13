var http = require('http');

function newServer(req, res) {
    var srv = http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('okay from the new server listening on 5678\n');
    });

    srv.listen(5678);
    var msg = 'A new server is listening on 5678';
    console.log(msg);
    res.send(msg + '\n');

};
