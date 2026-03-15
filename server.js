const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const contactRoutes = require("./Routes/contactRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://singhtaniya814_db_user:Taniya%4052570@cluster0.zpmh4t7.mongodb.net/risingacademy?retryWrites=true&w=majority");

app.use("/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));