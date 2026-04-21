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
  image: {
    type: String,
    default:
      "https://r.search.yahoo.com/_ylt=Awr1VTAlyOBp.gIA6da7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Nj/RV=2/RE=1777548582/RO=10/RU=https%3a%2f%2fwww.pinterest.com%2fpin%2famankila--98727416802059346%2f/RK=2/RS=zJFRnXJTRYHyKjjkGJIbfDjfsK0-",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/a-boat-is-in-a-large-body-of-water-ciYOQZ7eKQ4"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: schema.Types.ObjectId,
      ref: "review",
    },
  ],
});

listingschema.post("findOneAndDeleteMany", async (listing) => {
  await review.deleteMany({ _id: { $in: listing.reviews } });
});

const listing = mongoose.model("listing", listingschema);
module.exports = listing;
