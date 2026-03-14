const express = require("express");
const router = express.Router();
const Admission = require("../models/Admission");

router.post("/", async (req,res)=>{

try{

const admission = new Admission(req.body);

await admission.save();

res.json({
message:"Admission Submitted Successfully"
});

}catch(error){

res.status(500).json({error:error.message});

}

});

module.exports = router;