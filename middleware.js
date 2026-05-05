const listing = require("./models/listing");
const review = require("./models/review");

module.exports.isLoggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "you must be logged in for further actions");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listings = await listing.findById(id);

  if (!res.locals.currUser || !listings.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the owner of this listing");
    return res.redirect(`/listings/${id}`);
  }

  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;

  let reviews = await review.findById(reviewId);

  if (!res.locals.currUser || !reviews.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You did not create this review");
    return res.redirect(`/listings/${id}`);
  }

  next();
};
