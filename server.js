const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// serve html files
app.use(express.static(__dirname));

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});