const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing = require("./models/listing");
const path = require("path");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

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

//index route
app.get("/listings", async (req, res) => {
  const alllistings = await listing.find({});
  res.render("listings/index.ejs", { alllistings });
});

//show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listingindetail = await listing.findById(id);
  res.render("listings/show.ejs", { listingindetail });
});

//new route
app.get("/listings/new", (req, res) => {
  res.render("listings/new");
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
