var mongoose = require ('mongoose');
var db = mongoose.createConnection ('localhost', 'exm');

/*require("fs").readdirSync("./models").forEach(function(file) {
    if (file == 'index.js') {
        return;
    }
    //var model = require("./" + file) (db);
});*/

exports.User = require ("./user.js") (db).User;
