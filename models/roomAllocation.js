const mongoose = require('mongoose');


var roomAllocationSchema = new mongoose.Schema({


hostel:{type:String, required:true},
gender:{type:String, required:true},
capacity:{type:Number, required:true},
class1:{type:String,required:true},
studentId:{type:String,required:true},
studentName:{type:String,required:true},
hosteHead:{type:String,required:true},
grade:{type:Number,required:true},
occupancy:{type:Number,required:true},
year:{type:Number,required:true},
hostelId:{type:String,required:true},






})

module.exports = mongoose.model('Room Allocation', roomAllocationSchema);