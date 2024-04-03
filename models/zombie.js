const mongoose = require("mongoose")
var zombieSchema = mongoose.Schema({
    
    zombie_type: {type:String},
    height: {type:Number}, 
    turn_age: {type:Number}
})

module.exports = mongoose.model("zombie", zombieSchema)