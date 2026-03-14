const mongoose = require("mongoose");

const AdmissionSchema = new mongoose.Schema({

studentName:String,
fatherName:String,
email:String,
phone:String,
location:String,
qualification:String,
status:String,
course:String,

},{timestamps:true});

module.exports = mongoose.model("Admission",AdmissionSchema);