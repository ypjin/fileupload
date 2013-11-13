var colors = require('colors');
var request = require('request');

function newpath(req, res) {

    console.log('This is in newpath ' + "function".yellow);



    res.render('index', { title: 'Welcome to Node.ACS! akey = ' + req.param('akey') });
}



function get163(req, res) {

    request.get('http://www.163.com', function(error, response, body) {
        console.log('error: ', error);
        if(response)
            console.log('response code: ', response.statusCode);
        console.log(body) // Print the google web page.
        res.end(body);

    })




}