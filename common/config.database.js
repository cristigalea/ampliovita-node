var mongoose = require('mongoose');
var user = 'user';
var pass = 'password';
var mongoUrl = 'mongodb://'+ user +':'+ pass +'@ds013280.mlab.com:13280/ampliovita';

mongoose.connect(mongoUrl, function () {
	console.log('connected to mongodb');
});
