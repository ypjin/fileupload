var fs = require('fs'),
    path = require('path');

function index(req, res) {
	res.render('index', { title: 'Welcome to Node.ACS!' });
}


function upload(req, res) {

    console.log(req.files);

    fs.readFile(req.files.myfile.path, function (err, data) {
        if(err) {
            res.send(err);
            return;
        }
        var newPath = path.join(__dirname, "../uploads/", req.files.myfile.name);
        fs.writeFile(newPath, data, function (err) {
            if(err) {
                res.send(err);
                return;
            }
            res.send("back");
        });
    });
}