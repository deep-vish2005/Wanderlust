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
  if (req.files && req.files.length > 0) {
    newListing.image = req.files.map((file) => ({
      url: file.path,
      filename: file.filename,
    }));
  }
  const address = req.body.listing.location + "," + req.body.listing.country;

  const geoRes = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,
    {
      headers: {
        "User-Agent": "wanderlust-app",
      },
    },
  );

  const geoData = await geoRes.json();

  if (!geoData || geoData.length === 0) {
    req.flash("error", "Invalid location");
    return res.redirect("/listings/new");
  }

  const coords = geoData[0];

  newListing.geometry = {
    type: "Point",
    coordinates: [parseFloat(coords.lon), parseFloat(coords.lat)],
  };
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

  let listingindetail = await listing.findById(id);

  // update text fields
  Object.assign(listingindetail, req.body.listing);

  //  update images properly
  if (req.files && req.files.length > 0) {
    listingindetail.image = req.files.map((file) => ({
      url: file.path,
      filename: file.filename,
    }));
  }

  await listingindetail.save();

  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.DeleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedlisting = await listing.findByIdAndDelete(id);
  console.log(deletedlisting);
  req.flash("success", "Listing Deleted ");
  res.redirect("/listings");
};
