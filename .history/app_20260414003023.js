const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing = require("./models/listing");
const path = require("path");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

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

//new route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listingindetail = await listing.findById(id);
  res.render("listings/show.ejs", { listingindetail });
});

//create route
app.post("/listings", async (req, res) => {
  let { title, description, image, price, location, country } = req.body;
  const newListing = new listing(req.body);
  await newListing.save();
  res.redirect("/listings");
});

//edit route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listingindetail = await listing.findById(id);
  res.render("listings/edit.ejs", { listingindetail });
});

//update route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let { title, description, image, price, location, country } = req.body;
  const listingindetail = await listing.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.redirect(`/listings/${id}`);
});

//delete route
app.delete("/listings/:id");
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
