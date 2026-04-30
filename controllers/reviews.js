const listing = require("../models/listing");
const review = require("../models/review");

module.exports.CreateReview = async (req, res) => {
  let listings = await listing.findById(req.params.id);
  let newreview = new review(req.body.review);
  newreview.author = req.user._id;
  listings.reviews.push(newreview);
  await newreview.save();
  await listings.save();
  console.log("saved");
  req.flash("success", "New Review Created");
  res.redirect(`/listings/${listings._id}`);
};

module.exports.DeleteReview = async (req, res) => {
  let { id, reviewId } = req.params;
  await listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await review.findByIdAndDelete(reviewId);
  req.flash("success", "Review Deleted");
  res.redirect(`/listings/${id}`);
};
