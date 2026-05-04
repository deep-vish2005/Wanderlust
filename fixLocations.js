const mongoose = require("mongoose");
const Listing = require("./models/listing");

mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");

async function fixLocations() {
  const listings = await Listing.find({});

  for (let listing of listings) {
    if (!listing.geometry || listing.geometry.coordinates.length === 0) {
      const address = listing.location + "," + listing.country;

      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`,
        {
          headers: { "User-Agent": "wanderlust-app" },
        },
      );

      const data = await res.json();

      if (data.length > 0) {
        listing.geometry = {
          type: "Point",
          coordinates: [parseFloat(data[0].lon), parseFloat(data[0].lat)],
        };

        await listing.save();
        console.log("Updated:", listing.title);
      }
    }
  }

  console.log("Done!");
  mongoose.connection.close();
}

fixLocations();
