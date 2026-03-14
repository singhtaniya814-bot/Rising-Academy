// // const express = require("express");
// // const cors = require("cors");

// // const app = express();

// // app.use(cors());
// // app.use(express.json());

// // // serve html files
// // app.use(express.static(__dirname));

// // const PORT = 5000;

// // app.listen(PORT, () => {
// //   console.log("Server running on port 5000");
// // });
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const contactRoutes = require("./Routes/contactRoutes");
// const admissionRoutes = require("./Routes/admissionroutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb+srv://singhtaniya814_db_user:Taniya%4052570@cluster0.zpmh4t7.mongodb.net/risingacademy?retryWrites=true&w=majority")
// .then(()=>console.log("MongoDB Connected"))
// .catch(err=>console.log(err));

// app.use("/contact", contactRoutes);
// app.use("/admission", admissionRoutes);

// const PORT = 5000;

// app.listen(PORT, ()=>{
// console.log("Server running on port " + PORT);
// });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const contactRoutes = require("./Routes/contactRoutes");

const app = express();

app.use(cors());
app.use(express.json());

/* MongoDB connect */

mongoose.connect("mongodb+srv://singhtaniya814_db_user:Taniya%4052570@cluster0.zpmh4t7.mongodb.net/risingacademy?retryWrites=true&w=majority")

.then(()=>console.log("MongoDB Connected"))

.catch(err=>console.log(err));

/* Routes */

app.use("/contact", contactRoutes);

/* Server */

const PORT = 5000;

app.listen(PORT, ()=>{
console.log("Server running on port " + PORT);
});