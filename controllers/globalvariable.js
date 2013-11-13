
function showGlobal(req, res) {

    require('./deeper');

    var msg1 = 'globalvariable.showGlobal: ' + global.abc;
    var msg2 = 'globalvariable.showGlobal: ' + global.deeper;
    console.log(msg1);
    console.log(msg2);

    res.send(msg1 + '\n' + msg2 + '\n');
}