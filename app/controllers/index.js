'use strict';

var sampleService = require('../services/index').Sample;
var sample = new sampleService();

var cb = require('./../utils/callback');

exports.sample = function onRequest(req, res) {
    sample.sample(req.body, cb.setupResponseCallback(res));
};
