
function hash(req, res) {

    console.log('This is in index ' + "function".yellow);


    var bcrypt = require('bcrypt');
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("B4c0/\/", salt);

    res.render('index', { title: 'Welcome to Node.ACS! ' + hash });
}


