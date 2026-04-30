const listing = require("../models/listing");

module.exports.Index = async (req, res) => {
  const alllistings = await listing.find({});
  res.render("listings/index.ejs", { alllistings });
};

module.exports.NewListingform = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.ShowListing = async (req, res) => {
  let { id } = req.params;
  const listingindetail = await listing
    .findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listingindetail) {
    req.flash("error", "Listing you requested for does not exist");
  }
  res.render("listings/show.ejs", { listingindetail });
};

module.exports.NewListingCreated = async (req, res) => {
  const newListing = new listing(req.body.listing);
  newListing.owner = req.user._id;
  await newListing.save();
  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

module.exports.EditListing = async (req, res) => {
  let { id } = req.params;
  const listingindetail = await listing.findById(id);
  res.render("listings/edit.ejs", { listingindetail });
};

module.exports.UpdateListing = async (req, res) => {
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
};

module.exports.DeleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedlisting = await listing.findByIdAndDelete(id);
  console.log(deletedlisting);
  req.flash("success", "Listing Deleted ");
  res.redirect("/listings");
};
