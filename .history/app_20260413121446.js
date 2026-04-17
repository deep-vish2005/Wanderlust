const express = require("express");
const app = express();
const mongoose = require("mongoose");

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
