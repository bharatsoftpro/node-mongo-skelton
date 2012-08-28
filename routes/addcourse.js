module.exports = function (app, models) {

    app.get ("/admin/addcourse", function (request, response) {
        response.render ("addcourse", {title: "Add Course"});
    });
}
