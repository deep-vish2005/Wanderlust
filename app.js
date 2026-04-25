const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listing = require("./models/listing");
const path = require("path");
const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const review = require("./models/review");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const { listingschema, reviewSchema } = require("./schema");

const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user");

const listingRouter = require("./routes/listing");
const reviewRouter = require("./routes/review");
const userRouter = require("./routes/user");
const session = require("express-session");
const flash = require("connect-flash");

app.use(flash());
const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongo_url);
}

app.get("/", (req, res) => {
  res.send("working");
});

const validatelisting = (req, res, next) => {
  let { error } = listingschema.validate(req.body);
  if (error) {
    let errmsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, error);
  } else {
    next();
  }
};

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// app.get("/demo", async (req, res) => {
//   let fakeuser = new User({
//     email: "deep@gmail.com",
//     username: "btwimdeep",
//   });

//   let registereduser = await User.register(fakeuser, "deep@1234");
//   res.send(registereduser);
// });

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// app.get("/testlisting", async (req, res) => {
//   let samplelisting = new listing({
//     title: "my bunglow",
//     description: "luxirious",
//     price: 3400,
//     location: "jabalpur",
//     country: "india",
//   });

//   await samplelisting.save();
//   console.log("sample was saved");
//   res.send("successfull");
// });

app.use((req, res, next) => {
  next(new ExpressError(404, "page not found!"));
});

app.use((err, req, res, next) => {
  let { statuscode = 500, message = "Something went wrong" } = err;
  //   res.status(statuscode).send(message);
  res.status(statuscode).render("listings/error.ejs", { message });
});

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});
