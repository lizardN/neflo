const mongoose = require('mongoose');


var levelSchema = new mongoose.Schema({



grade:{type:Number, required:true},
levelX:{type:Number, required:true},
companyId:{type:String}





})

module.exports = mongoose.model('Level', levelSchema);