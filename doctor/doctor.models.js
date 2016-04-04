var mongoose = require('mongoose');

var DoctorSchema = {
	firstName:String,
	lastName:String,
	expertise:[String],
	availableDays:[String],
	availableFrom: String,
	availableTo: String,
	availableAt: {
		hospital_name: String,
		hospital_address: String
	}
};

var doctors = mongoose.model('Doctor', DoctorSchema, 'doctors');

module.exports = {
	doctors: doctors 
}