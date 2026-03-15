const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const contactRoutes = require("./Routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());

/* MongoDB Connection */

mongoose.connect(
"mongodb+srv://singhtaniya814_db_user:Taniya%4052570@cluster0.zpmh4t7.mongodb.net/risingacademy?retryWrites=true&w=majority"
)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

/* Routes */

app.use("/contact", contactRoutes);

/* Server */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});