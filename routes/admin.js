module.exports = function (app, models) {

    app.get ("/admin", function (request, response) {
        response.render ("admin", {title: "Admin"});
    });
}
