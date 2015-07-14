'use strict';

module.exports = function(app, passport, isLoggedIn, isAdmin) {
    // Code goes Here.
    app.route('/').get(function(req, res) {
        res.render('index');
    });
};
