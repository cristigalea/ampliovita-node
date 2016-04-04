var express = require('express');
var router = express.Router();
var controller = require('./patient.ctrl.js');

router.route('/').get(controller.list)
				.post(controller.create);

router.route('/:id').get(controller.getById)
					.patch(controller.update)
					.delete(controller.remove);

module.exports = router;