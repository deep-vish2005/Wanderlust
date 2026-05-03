const { ref } = require("joi");
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const review = require("./review");

const listingschema = new schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: [
    {
      url: String,
      filename: String,
    },
  ],
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: schema.Types.ObjectId,
      ref: "review",
    },
  ],
  owner: {
    type: schema.Types.ObjectId,
    ref: "User",
  },
});

listingschema.post("findOneAndDeleteMany", async (listing) => {
  await review.deleteMany({ _id: { $in: listing.reviews } });
});

const listing = mongoose.model("listing", listingschema);
module.exports = listing;
