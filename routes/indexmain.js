module.exports = function (app, models){

    app.get ('/', function(req, res){
        models.User.find ( function (err, users) {
            res.render('index', { title: 'Express', users: users });
        });
    });

}

