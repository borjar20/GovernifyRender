var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var User = new Schema(
    {
        name:{
            type:String
        },
        avatar:{
            type:String
        },
        github:{
            type:String
        }
    }
)

var TaskSchema = new Schema(
    {
        idTask:{
            type:Number
        },
        Title:{
            type:String
        },
        Description: {
            type:String
        },
        asignedUser:{
            type:User
        },
        finalDate:{
            type:String
        },
        state:{
            type:String
        }
    }
)

module.exports = mongoose.model("Task", TaskSchema)