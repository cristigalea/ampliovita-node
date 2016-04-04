var express = require('express');
var router = express.Router();
var controller = require('./admin.ctrl.js');

router.route('/login').post(controller.login);
router.route('/create').post(controller.create);

module.exports = router;