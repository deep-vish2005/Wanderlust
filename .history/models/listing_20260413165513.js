const mongoose = require("mongoose");
const schema = mongoose.Schema;

const listingschema = new schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: String,
    url: String,
    default:
      "https://unsplash.com/photos/a-boat-is-in-a-large-body-of-water-ciYOQZ7eKQ4",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/a-boat-is-in-a-large-body-of-water-ciYOQZ7eKQ4"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const listing = mongoose.model("listing", listingschema);
module.exports = listing;
