var express = require('express');
var parser = require('body-parser');

require('./common/config.database');

var adminRouter = require('./admin/admin.routes');
var patientRouter = require('./patient/patient.routes');
var doctorRouter = require('./doctor/doctor.routes');

var port = process.env.PORT || 8080;

var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

app.get('/', function (req, res) {
	res.send('Welcome to Ampliovita REST express implementation');
});

app.use('/api/admin', adminRouter);
app.use('/api/patient', patientRouter);
app.use('/api/doctor', doctorRouter);

app.listen(port, function (err) {
	if (err) {
		console.log(err);
	}
	console.log('running server on port ' + port);
});