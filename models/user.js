var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema ({
    name: String,
    firstName: String,
    lastName: String,
    password: String,
});

module.exports = function (db) {
    return {
        User: db.model ('User', userSchema)
    }
}

