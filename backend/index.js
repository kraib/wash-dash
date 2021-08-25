const express = require("express");
const app = express();
const port = 3001;
var cors = require("cors");
var bodyParser = require("body-parser");

//middle-ware to support FE requests
app.use(cors());
app.use(bodyParser.json());

///mongoose
const mongoose = require("mongoose");
mongoose.connect(
  "mmongodb+srv://uhuru:6UWjuBsXqPLwqqvh@cluster0-muwee.mongodb.net/wash-dash?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log(`db connected`);
});

const washerSchema = new mongoose.Schema({
  name: String,
  phonenumber: String,
});

const Washer = mongoose.model("Washer", washerSchema);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  let washerFromRequest = new Washer(req.body);
  washerFromRequest.save();
  res.send("Saved");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
