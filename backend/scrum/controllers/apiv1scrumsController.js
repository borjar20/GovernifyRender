'use strict'

var varapiv1scrumsController = require('./apiv1scrumsControllerService');

module.exports.getScrums = function getScrums(req, res, next) {
  varapiv1scrumsController.getScrums(req.swagger.params, res, next);
};

module.exports.addScrum = function addScrum(req, res, next) {
  varapiv1scrumsController.addScrum(req.swagger.params, res, next);
};