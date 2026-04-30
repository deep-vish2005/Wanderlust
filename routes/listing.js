const express = require("express");
const router = express.Router();
const listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingschema, reviewSchema } = require("../schema");
const { isLoggedin, isOwner } = require("../middleware");
const {
  Index,
  NewListingform,
  ShowListing,
  NewListingCreated,
  EditListing,
  UpdateListing,
  DeleteListing,
} = require("../controllers/listings");

const validatelisting = (req, res, next) => {
  let { error } = listingschema.validate(req.body);
  if (error) {
    let errmsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

router
  .route("/")
  .get(wrapAsync(Index))
  .post(isLoggedin, validatelisting, wrapAsync(NewListingCreated));

//new route
router.get("/new", isLoggedin, NewListingform);

router
  .route("/:id")
  .get(wrapAsync(ShowListing))
  .put(isLoggedin, isOwner, validatelisting, wrapAsync(UpdateListing))
  .delete(isLoggedin, isOwner, wrapAsync(DeleteListing));

//edit route
router.get("/:id/edit", isLoggedin, isOwner, wrapAsync(EditListing));

module.exports = router;
