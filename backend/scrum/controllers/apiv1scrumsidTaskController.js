'use strict'

var varapiv1scrumsidTaskController = require('./apiv1scrumsidTaskControllerService');

module.exports.findScrumByidTask = function findScrumByidTask(req, res, next) {
  varapiv1scrumsidTaskController.findScrumByidTask(req.swagger.params, res, next);
};

module.exports.deleteScrum = function deleteScrum(req, res, next) {
  varapiv1scrumsidTaskController.deleteScrum(req.swagger.params, res, next);
};

module.exports.updateScrum = function updateScrum(req, res, next) {
  varapiv1scrumsidTaskController.updateScrum(req.swagger.params, res, next);
};
