var users = require('./admin.models').users;
var appUtils = require('./../common/app.utils');

var controller = {
	login: login,
	create: create
};

function login(req, res) {
	var user = req.body;

	if (_authFieldMissing(user)) {
		res.send({ success: false });
	} else {
		users.findOne({ username: user.username, password: user.password, type: user.type }, function (error, result) {
			appUtils.handleDbOperationResponse(error, result, res);
		});
	}
}

function create(req, res) {
	var user = req.body;

	if ( _authFieldMissing(user) || !user.full_name || (user.type !== 'doctor' && user.type !== 'patient')) {
		res.send({ success: false });
	} else {
		var userModel = new users(user);
		userModel.save(function (error, result) {
			appUtils.handleDbOperationResponse(error, result, res);
		});
	}
}

function _authFieldMissing(user) {
	return !user.username || !user.password || !user.type;
}

module.exports = controller;