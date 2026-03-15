const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");  // Line 1

// EMAIL SETUP - Lines 2-6
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'singhtaniya814@gmail.com',
    pass: 'zmayreyjavmdsmap'  // Line 6
  }
});

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://singhtaniya814_db_user:Taniya%4052570@cluster0.zpmh4t7.mongodb.net/risingacademy?retryWrites=true&w=majority")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

// Routes
app.get('/', (req, res) => res.send('Rising Academy Backend LIVE!'));
app.post('/contact', (req, res) => {
  console.log('Contact:', req.body);
  res.json({success: true, message: 'Form submitted!'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});