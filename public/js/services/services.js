'use strict';

var MainFactory = function($http){
	var MainFactory = {};

	MainFactory.sample = function(cb){
		$http.delete('/api/1.0/sample/').success(function(data){
			cb(data);
		}).error(function(err){
			console.log('Error ...',err);
		});
	};

	return AddressFactory;
}

Que.Services.factory('MainFactory',['$http' ,MainFactory]);

