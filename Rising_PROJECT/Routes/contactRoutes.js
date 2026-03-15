// const express = require('express');
// const mongoose = require('mongoose');
// const nodemailer = require('nodemailer');
// const router = express.Router();

// // Model
// const Contact = mongoose.model('Contact', new mongoose.Schema({
//   name: String, email: String, message: String
// }));

// // Email
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'singhtaniya814@gmail.com',
//     pass: 'zmayreyjavmdsmap'
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const { name, email, message
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const router = express.Router();

/* Model */

const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema({
    name: String,
    email: String,
    message: String,
  })
);

/* Email transporter */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "singhtaniya814@gmail.com",
    pass: "zmayreyjavmdsmap"
  }
});

/* Contact form route */

router.post("/", async (req, res) => {

  try {

    const { name, email, message } = req.body;

    /* Save to MongoDB */

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();

    /* Send email */

    await transporter.sendMail({
      from: email,
      to: "singhtaniya814@gmail.com",
      subject: "New Contact Form Message",
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
`
    });

    res.json({
      message: "Message Sent Successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Something went wrong"
    });

  }

});

module.exports = router;