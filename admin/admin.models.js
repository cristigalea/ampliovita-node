var mongoose = require('mongoose');

var UserSchema = {
	username:String,
	password:String,
	type:String,
	full_nme:String
};

var users = mongoose.model('User', UserSchema, 'users');

module.exports = {
	users: users 
}