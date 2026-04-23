const express = require("express");
const router = express.Router({ mergeParams: true });
const review = require("../models/review");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingschema, reviewSchema } = require("../schema");
const listing = require("../models/listing");

const validatereview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errmsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

//reviews
router.post(
  "/",
  validatereview,
  wrapAsync(async (req, res) => {
    let listings = await listing.findById(req.params.id);
    let newreview = new review(req.body.review);
    listings.reviews.push(newreview);
    await newreview.save();
    await listings.save();
    console.log("saved");
    req.flash("success", "New Review Created");
    res.redirect(`/listings/${listings._id}`);
  }),
);

//delete route
router.delete(
  "/:reviewId",
  wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;
    await listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${id}`);
  }),
);

module.exports = router;
