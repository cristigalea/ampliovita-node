var mongoose = require('mongoose');

var PatientSchema = {
	firstName:String,
	lastName:String,
	diagnostics:[String],
	treatment:{
		names: [String],
		manufacturers: [String],
		dosages: [String],
		frequencies: [String],
		durations: [String]
	},
	alergies:[String],
	lastCheckup:String,
	nextCheckup:String
};

var patients = mongoose.model('Patient', PatientSchema, 'patients');

module.exports = {
	patients: patients 
}