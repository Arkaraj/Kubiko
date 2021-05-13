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
const Course = require("./models/Course");

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

// try {
//   const course = new Course({
//     name: "Operating Systems",
//     description: "This course is about OS",
//     creator: ["60558f67807375dd230820d8"],
//   });

//   course.save((err) => {
//     if (err) throw err;
//     else {
//       console.log("Done");
//     }
//   });
// } catch (err) {
//   console.log(err);
// }

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Working" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port} 🚀`);
});
