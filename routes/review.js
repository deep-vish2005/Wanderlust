const express = require("express");
const router = express.Router({ mergeParams: true });
const review = require("../models/review");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingschema, reviewSchema } = require("../schema");
const listing = require("../models/listing");
const { isLoggedin, isReviewAuthor } = require("../middleware");
const { CreateReview, DeleteReview } = require("../controllers/reviews");

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
router.post("/", isLoggedin, validatereview, wrapAsync(CreateReview));

//delete route
router.delete(
  "/:reviewId",
  isLoggedin,
  isReviewAuthor,
  wrapAsync(DeleteReview),
);

module.exports = router;
