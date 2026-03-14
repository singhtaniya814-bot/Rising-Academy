// const express = require("express");
// const router = express.Router();
// const Contact = require("../models/Contact");

// router.post("/", async (req,res)=>{

// try{

// const contact = new Contact(req.body);

// await contact.save();

// res.json({
// message:"Message Sent Successfully"
// });

// }catch(error){

// res.status(500).json({error:error.message});

// }

// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({

service:"gmail",

auth:{
user:"singhtaniya814@gmail.com",
pass:"zmayreyjavmdsmap"
}

});

router.post("/", async (req,res)=>{

try{

const contact = new Contact(req.body);

await contact.save();

const mailOptions = {

from:"singhtaniya814@gmail.com",
to:"zmayreyjavmdsmap",

subject:"New Contact Message",

text:`
Name: ${req.body.name}
Email: ${req.body.email}
Message: ${req.body.message}
`

};

await transporter.sendMail(mailOptions);

res.json({message:"Message Sent Successfully"});

}catch(error){

res.status(500).json({error:error.message});

}

});

module.exports = router;