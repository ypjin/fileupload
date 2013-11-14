var ACS = require('acs').ACS;
var logger = require('acs').logger;

global.abc = "value of global variable 'abc' set in app.js";

// initialize app
function start(app, express, io) {

    ACS.init('Pi3lvcEaaDvLZ7Fcixntx4PlJPjG7zb4');
    logger.setLevel('DEBUG');

    //mvc frame work in nettle has included cookieParser
    //app.use(express.cookieParser());
    app.use(express.session({ key: 'node.acs', secret: "my secret" }));

    app.use(express.favicon(__dirname + '/public/images/favicon.ico'));		//set favicon

    //mvc framework in nettle has included this without any parameter
    //there is no need to use formidable directly
//    app.use(express.bodyParser({defer:true}));

    if(io) {
        playWith(io);
    }
}

// release resources
function stop() {
	
}


function playWith(io) {

    console.log('===> got io object')
    global.io = io;
}