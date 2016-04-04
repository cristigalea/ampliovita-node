var doctors = require('./doctor.models').doctors;
var appUtils = require('./../common/app.utils');

var controller = appUtils.generateRestOperations(doctors, _anyFieldMissing, _generateDoctorFromPayload);

function _anyFieldMissing(doctor) {
	return !doctor.firstName || 
		!doctor.lastName || 
		!doctor.expertise || 
		!doctor.availableDays || 
		!doctor.availableFrom || 
		!doctor.availableTo || 
		!doctor.availableAt.hospital_name || 
		!doctor.availableAt.hospital_address;
}

function _generateDoctorFromPayload(payload) {
	return {
		firstName: payload.firstName,
		lastName: payload.lastName,
		expertise: payload.expertise.split('|'),
		availableDays: payload.availableDays.split('|'),
		availableFrom: payload.availableFrom,
		availableTo: payload.availableTo,
		availableAt: {
			hospital_name: payload.hospital_name,
			hospital_address: payload.hospital_address
		}
	};
}

module.exports = controller;