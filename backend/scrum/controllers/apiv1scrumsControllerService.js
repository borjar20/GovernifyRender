'use strict'
var mongoose = require('mongoose')
var Task = mongoose.model('Task')

module.exports.getScrums = async function getScrums(req, res, next) {

  await Task.find({}).exec()
    .then((tasks)=>{
      tasks = tasks.map((task)=>{
        return {
          idTask:task._id.toHexString(),
          Title:task.Title,
          Description:task.Description,
          asignedUser:{
            name:task.asignedUser.name,
            avatar:task.asignedUser.avatar,
            github:task.asignedUser.github
          },
          finalDate:task.finalDate,
          state:task.state
        }
      })
      res.send(tasks)
    }).catch((err)=>{
      console.log(err)
      res.send([])
    })

};

module.exports.addScrum = async function addScrum(req, res, next) {


  let newTask = new Task(req.scrum.value)
  await newTask.save();
  res.send({
    message:"Task Saved"
  })
};
