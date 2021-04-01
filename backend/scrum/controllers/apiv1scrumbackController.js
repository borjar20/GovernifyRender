var varapiv1scrumsbackController = require('./apiv1scrumbackControllerService');

module.exports.backScrum = function backScrum(req, res, next) {
    varapiv1scrumsbackController.backScrum(req.swagger.params, res, next);
};