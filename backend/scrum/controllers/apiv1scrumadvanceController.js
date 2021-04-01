
var varapiv1scrumsadvanceController = require('./apiv1scrumadvanceControllerService');

module.exports.advanceScrum = function advanceScrum(req, res, next) {
    varapiv1scrumsadvanceController.advanceScrum(req.swagger.params, res, next);
  };

