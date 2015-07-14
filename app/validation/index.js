'use strict';

exports.validateSample = function(req, res, next) {

    req.checkBody('name', 'Error Message here').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.status(200).send(errors);
    } else {
        next();
    }
};
