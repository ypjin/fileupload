var formidable = require('formidable'),
    fs = require('fs'),
    path = require('path');

/**
 * this can only work with {defer:true} passed to bodyParser in mvc framework (nettle needs to be updated)
 * @param req
 * @param res
 */
function upload(req, res) {

    var form = new formidable.IncomingForm();
    var uploaded_file;
    form.uploadDir = "/tmp";
    form.on('file', function(field, file) {
        uploaded_file = file;
    });

    form.on('progress', function(byteReceived, byteExpected) {
        console.log('Uploaded: ' + Math.round(byteReceived/byteExpected * 100) + '%');
    });
    form.on('end', function() {

        fs.readFile(uploaded_file.path, function (err, data) {
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
                res.writeHead(200, {'content-type': 'text/plain'});
                res.write("Uploaded file: " + uploaded_file.name);
                res.write("\n");
                res.end("Done");
            });
        });
    });

    form.parse(req);
    return;

}