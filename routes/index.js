var fs = require('fs');

module.exports = function (app, models){
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file == "index.js") return;
        require ('./' + file)(app, models);
    });
}
