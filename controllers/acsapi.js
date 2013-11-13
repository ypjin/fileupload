function index(req, res) {

    for(var i = 0; i < 10; i++) {
        console.log('debug log ' + i + 'at ' + new Date());
    }


    res.render('index', { title: 'Welcome to Node.ACS 1122!' });
}


function com(req, res) {



}

var data = {};
var lastLevel = null;

function prepare(req, res) {

    var level = req.query.level;

    console.log('Level from request: ' + level);

    if(lastLevel && lastLevel == level) {
        res.json(data);
        return;
    }

    console.log('Generating data...');
    lastLevel = level;
    var p = data;

    for(var i=0; i<level; i++) {

        var key = 'level' + i;
        var value = 'Welcome to Node.ACS App for compression test ' + i;
        var o = {};
        o[key] = value;

        p[key] = o;
        p = o;

    }

    console.log('Generating data done!');
    res.json(data);



}