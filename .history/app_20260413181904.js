const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing = require("./models/listing");
const path = require("path");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

app.get("/", (req, res) => {
  res.send("working");
});

app.get("/listings", async (req, res) => {
  const alllistings = await listing.find({});
  res.render("index.ejs", { alllistings });
});

// app.get("/testlisting", async (req, res) => {
//   let samplelisting = new listing({
//     title: "my bunglow",
//     description: "luxirious",
//     price: 3400,
//     location: "jabalpur",
//     country: "india",
//   });

//   await samplelisting.save();
//   console.log("sample was saved");
//   res.send("successfull");
// });

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
