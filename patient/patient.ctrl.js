var patients = require('./patient.models').patients;
var appUtils = require('./../common/app.utils');

var controller = appUtils.generateRestOperations(patients, _anyFieldMissing, _generatePatientFromPayload);

function _anyFieldMissing(patient) {
	return !patient.firstName || 
		!patient.lastName || 
		!patient.diagnostics || 
		!patient.treatment.names || 
		!patient.treatment.manufacturers || 
		!patient.treatment.dosages || 
		!patient.treatment.frequencies || 
		!patient.treatment.durations ||
		!patient.alergies || 
		!patient.lastCheckup || 
		!patient.nextCheckup;
}

function _generatePatientFromPayload(payload) {
	return {
		firstName: payload.firstName,
		lastName: payload.lastName,
		diagnostics: payload.diagnostics.split('|'),
		treatment: {
			names: payload.names.split('|'),
			manufacturers: payload.manufacturers.split('|'),
			dosages: payload.dosages.split('|'),
			frequencies: payload.frequencies.split('|'),
			durations: payload.durations.split('|')
		},
		alergies: payload.alergies.split('|'),
		lastCheckup: payload.lastCheckup,
		nextCheckup: payload.nextCheckup
	};
}

module.exports = controller;