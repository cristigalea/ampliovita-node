function handleDbOperationResponse(error, result, res) {
	if (error || !result) {
		console.log(error);
		res.send({ success: false });
	} else {
		res.send({ 
			success: true, 
			result: result
		});
	}
}

function generateRestOperations(dbItems, _anyFieldMissing, _generateItemFromPayload) {
	var controller = {
		list: list,
		getById: getById,
		create: create,
		update: update,
		remove: remove
	};

	return controller;


	function list(req, res) {
	dbItems.find({}, function (error, result) {
		handleDbOperationResponse(error, result, res);
	});
}

	function getById(req, res) {
		dbItems.findOne({ _id: req.params.id }, function (error, result) {
			handleDbOperationResponse(error, result, res);
		})
	}

	function create(req, res) {
		var item = _generateItemFromPayload(req.body);

		if (_anyFieldMissing(item)) {
			res.send({ success: false });
		} else {
			var itemModel = new dbItems(item);
			itemModel.save(function (error, result) {
				handleDbOperationResponse(error, result, res);
			});
		}
	}

	function update(req, res) {
		dbItems.findOne({ _id: req.params.id }, function (error, result) {
			if (error || !result) {
				console.log(error);
				res.send({ success: false });
			} else {
				var item = _generateItemFromPayload(req.body);

				if (_anyFieldMissing(item)) {
					res.send({ success: false });
				} else {
					for (var key in item) { //we only overwite submitted keys
						result[key] = item[key];
					}
					result.save(function (error, result) {
						handleDbOperationResponse(error, result, res);
					});
				}
			}
		});
	}

	function remove(req, res) {
		dbItems.findOne({ _id: req.params.id }, function (error, result) {
			if (error || !result) {
				console.log(error);
				res.send({ success: false });
			} else {
				result.remove(function (error, result) {
					handleDbOperationResponse(error, result, res);
				});
			}
		});
	}
}

module.exports = {
	handleDbOperationResponse: handleDbOperationResponse,
	generateRestOperations: generateRestOperations
};