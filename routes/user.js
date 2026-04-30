const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const {
  SignUp,
  LoginForm,
  SignUpForm,
  Login,
  LogOut,
} = require("../controllers/user");

router.get("/signup", SignUpForm);

router.post("/signup", wrapAsync(SignUp));

router.get("/login", LoginForm);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  Login,
);

router.get("/logout", LogOut);

module.exports = router;
