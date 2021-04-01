var mongoose = require('mongoose')
var Task = mongoose.model('Task')

module.exports.advanceScrum = async function advanceScrum(req, res, next) {

    let nextValue = '';
    switch (req.scrum.value.state) {
        case "todo":
            nextValue = "inprogress";
            break;
        case "inprogress":
            nextValue = "inreview";
            break;
        case "inreview":
            nextValue = "done";
            break;
        default:
            nextValue = "done";
            break;
    }
    
    await Task.updateOne({_id: req.scrum.value.idTask}, {state: nextValue}).then(result => {
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
