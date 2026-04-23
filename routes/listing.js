const express = require("express");
const router = express.Router();
const listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingschema, reviewSchema } = require("../schema");

const validatelisting = (req, res, next) => {
  let { error } = listingschema.validate(req.body);
  if (error) {
    let errmsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

//index route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const alllistings = await listing.find({});
    res.render("listings/index.ejs", { alllistings });
  }),
);

//new route
router.get("/new", (req, res) => {
  res.render("listings/new.ejs");
});

//show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listingindetail = await listing.findById(id).populate("reviews");
    if (!listingindetail) {
      req.flash("error", "Listing you requested for does not exist");
    }
    res.render("listings/show.ejs", { listingindetail });
  }),
);

//create route
router.post(
  "/",
  validatelisting,
  wrapAsync(async (req, res) => {
    const newListing = new listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
  }),
);

//edit route
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listingindetail = await listing.findById(id);
    res.render("listings/edit.ejs", { listingindetail });
  }),
);

//update route
router.put(
  "/:id",
  validatelisting,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listingindetail = await listing.findByIdAndUpdate(
      id,
      req.body.listing,
      {
        new: true,
      },
    );
    req.flash("success", " Listing Updated");
    res.redirect(`/listings/${id}`);
  }),
);

//delete route
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedlisting = await listing.findByIdAndDelete(id);
    console.log(deletedlisting);
    req.flash("success", "Listing Deleted ");
    res.redirect("/listings");
  }),
);

module.exports = router;
