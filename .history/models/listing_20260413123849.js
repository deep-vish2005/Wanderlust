const mongoose = require("mongoose");
const schema = mongoose.schema;

const listingschema = {
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
   type: String,
   set: (v) => v === ""? "https://unsplash.com/photos/a-boat-is-in-a-large-body-of-water-ciYOQZ7eKQ4" : v,
  }
  price: Number,
  location: String,
  country: String,
};

const listing = mongoose.model("listing", listingschema);
modules.export = listing;
