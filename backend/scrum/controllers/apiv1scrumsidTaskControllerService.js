'use strict'
var mongoose = require('mongoose')
var Task = mongoose.model('Task')

module.exports.findScrumByidTask = function findScrumByidTask(req, res, next) {
  res.send({
    message: 'This is the mockup controller for findScrumByidTask'
  });
};

module.exports.deleteScrum = async function deleteScrum(req, res, next) {
 
  await Task.findByIdAndRemove(req.idTask.value);

  res.send({
    message: 'Task deleted successfully'
  });
};

module.exports.updateScrum = function updateScrum(req, res, next) {
  res.send({
    message: 'This is the mockup controller for updateScrum'
  });
};

