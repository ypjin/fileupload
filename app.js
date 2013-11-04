// initialize app
function start(app, express) {
	app.use(express.favicon(__dirname + '/public/images/favicon.ico'));		//set favicon

    //mvc framework in nettle has included this without any parameter
    //there is no need to use formidable directly
//    app.use(express.bodyParser({defer:true}));

}

// release resources
function stop() {
	
}