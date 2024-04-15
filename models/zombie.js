const mongoose = require("mongoose")
var zombieSchema = mongoose.Schema({
    
    zombie_type: {
        type:String,
        max_length: [20, 'type length must be less than 20'],
        lowercase: true,
        required: [true, 'zombie_type must have a value']
    },
    height: {
        type:Number,
        set: v => Math.floor(v),
        min: [0, 'height must be at least 0'],
        required: [true, 'height must have a value']
    }, 
    turn_age: {
        type:Number,
        set: v => Math.floor(v),
        min: [0, 'turned age must be at least 0'],
        required: [true, 'turned age must have a value']
    }
})

module.exports = mongoose.model("zombie", zombieSchema)