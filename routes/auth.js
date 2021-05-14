const express = require("express");
const router = express.Router();
const Users = require("../models/User");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("passport");
const passportConfig = require("./passport");
const Quiz = require("../models/Quiz");
const Course = require("../models/Course");

const signToken = (id) => {
  return JWT.sign(
    {
      iss: "Arkaraj", // issued by
      sub: id,
    },
    `${process.env.SECRET}`,
    { expiresIn: "30d" }
  );
};

// Authorization through passport

// For registering User
router.post("/register", async (req, res) => {
  const { name, password, email, role } = req.body;
  Users.findOne({ email }, (err, emailPresent) => {
    if (err) {
      //console.log('Error ' + err)
      res
        .status(500)
        .json({ message: { msg: "Error has occured", msgError: true } });
    }
    if (emailPresent)
      res
        .status(400)
        .json({ message: { msg: "email is already taken", msgError: true } });
    else {
      const newUser = new Users({ name, password, email, role });
      newUser.save((err) => {
        if (err) {
          //console.log('Error ' + err)
          res
            .status(500)
            .json({ message: { msg: "Error has occured", msgError: true } });
        } else
          res.status(201).json({
            message: { msg: "Account successfully created", msgError: false },
          });
      });
    }
  });
});

// For Loginnig in User
// User should not be able to go back once authenticated
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  Users.findOne({ email }, function (err, user) {
    if (err) {
      //console.log('Error ' + err)
      res
        .status(500)
        .json({ message: { msg: "Error has occured", msgError: true } });
    }
    if (!user) {
      res
        .status(400)
        .json({ message: { msg: "Invalid Email", msgError: true } });
    } else {
      bcrypt.compare(password, user.password, function (err, validate) {
        if (err) {
          //console.log('Error ' + err)
          res.status(500).json({
            message: { msg: "Error has occured in bcrypt", msgError: true },
          });
        }
        if (!validate) {
          res
            .status(400)
            .json({ message: { msg: "Invalid Password", msgError: true } });
        } else {
          // Logged in
          const token = signToken(user._id);
          // httpOnly doen't let client side js touch the cookie saves from cross scripting attacks
          res.cookie("access_token", token, { httpOnly: true, sameSite: true });
          res.status(200).json({
            user,
            isAuthenticated: true,
            message: { msgError: false },
          });
        }
      });
    }
  });
});

// Logout Account
router.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.clearCookie("access_token");
    res.status(200).json({ msg: "Logged out", user: {}, success: true });
  }
);

// General Route
// Show Quizzes in the Course room
router.get("/quiz/:courseId", async (req, res) => {
  // This will be an array
  try {
    const quizzes = await Quiz.find({ courseId: req.params.courseId }).populate(
      "questions"
    );

    res.send({ quizzes });
  } catch (err) {
    throw err;
  }
});

// Get the Course
router.get("/course/:courseId", async (req, res) => {
  const course = await Course.findById(req.params.courseId).populate("creator");

  res.send({ course });
});

// Main route
router.get(
  "/c/isAuthenticated",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).json({ isAuthenticated: true, user: req.user });
  }
);

module.exports = router;
