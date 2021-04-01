
var mongoose = require('mongoose')
var Task = mongoose.model('Task')

module.exports.backScrum = async function backScrum(req, res, next) {

    let nexValue = '';
    switch (req.scrum.value.state) {
        case "inprogress":
            nexValue = "todo";
            break;
        case "inreview":
            nexValue = "inprogress";
            break;
        case "done":
            nexValue = "inreview";
            break;
        default:
            nexValue = "todo";
            break;
    }
    
    await Task.updateOne({_id: req.scrum.value.idTask}, {state: nexValue}).then(result => {
        console.log(result)
        Task.save(result)
    })
    .catch(err => {
        console.log(err)
    })
  
    res.send({
      message: 'Updated successfully'
    });
  };