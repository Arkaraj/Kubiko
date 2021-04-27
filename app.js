const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const auth = require("./routes/auth");
const student = require("./routes/student");
const sensei = require("./routes/sensei");
const passport = require("passport");
const passportConfig = require("./routes/passport");
const isSensei = require("./middlewares/isSensei");
const isStudent = require("./middlewares/isStudent");

mongoose.connect(
  `mongodb://localhost/QuizHack`,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("Successfully connected to Database!!");
  }
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/user", auth);
app.use(
  "/students",
  passport.authenticate("jwt", { session: false }),
  isStudent,
  student
);
app.use(
  "/teachers",
  passport.authenticate("jwt", { session: false }),
  isSensei,
  sensei
);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Working" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port} 🚀`);
});
