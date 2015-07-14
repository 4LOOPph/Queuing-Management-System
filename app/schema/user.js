'use strict';

module.exports = function(mongoose){
	var User_Account = new mongoose.Schema({
		username: String,
		password: String
	});

	mongoose.model('User_Account', User_Account);
}
