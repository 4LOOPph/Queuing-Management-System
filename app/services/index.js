'use strict';


var sampleDao = require('../daos/sampleDao');

function Sample() {
    this.sampleDao = sampleDao;
}

Sample.prototype.sample = function(next) {
    sampleDao.sample(next);
}

exports.Sample = Address;
