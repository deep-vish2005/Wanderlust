const mongoose = require("mongoose");
const schema = mongoose.schema;

const listingschema = {
  title: String,
  description: String,
  image: String,
  price: Number,
  location: String,
  country: String,
};

const listing = mongoose.model("listing", listingschema);
