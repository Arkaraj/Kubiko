const express = require("express");
const Course = require("../models/Course");
const Performance = require("../models/Performance");
const Quiz = require("../models/Quiz");
const Result = require("../models/Result");
const User = require("../models/User");
const router = express.Router();

// Get all courses for a pirticular student
router.get("/course", async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("courses");
    res.send({ courses: user.courses });
  } catch (err) {
    // Not right way to handle error
    console.log(err);
    res.status(500).json({});
  }
});

router.post("/join", async (req, res) => {
  const { code } = req.body;

  try {
    const course = await Course.findOne({ code });

    if (!course) {
      res.send({ msg: "Invalid Course code", msgError: true });
    } else {
      if (course.length == 0) {
        res.send({ msg: "Invalid Course code", msgError: true });
      } else {
        // check if the user is already there or not, if the user is the admin or not
        // console.log(course)

        if (course.students.includes(req.user._id)) {
          res.send({ msg: "User already a member", msgError: true });
        } else {
          course.students.push(req.user._id);

          course.save();

          const user = await User.findById(req.user._id);

          user.courses.push(course._id);
          user.save();

          res.send({ user });
        }
      }
    }
  } catch (err) {
    console.log(err);
    res.send({ msg: "Internal Error" });
  }
});

router.delete("/course/:courseId", async (req, res) => {
  const user = await User.findById(req.user._id);

  user.courses.filter((c) => c != req.params.courseId);
  user.save();

  const course = await Course.findById(req.params.courseId);

  course.students.filter((s) => s != req.user._id);
  course.save();

  res.send({ user });
});

// Show Quizzes in the Course room
router.get("/quiz/:courseId", async (req, res) => {
  // This will be an array
  const quizzes = await Quiz.find({ courseId: req.params.courseId }).populate(
    "questions"
  );

  res.send({ quizzes });
});

// Students can write quizzes
router.post("/quiz/:quizId", async (req, res) => {
  const { option } = req.body;

  Quiz.findById({ _id: req.params.quizId })
    .populate("questions")
    .exec((err, document) => {
      if (err) res.send({ msgError: true });
      else {
        // question is an array of questions
        const questions = document.questions;
        // will contain the answers as well
        res.send({ questions });
      }
    });
});

router.post("/marks/:quizId/:courseId", async (res, req) => {
  const { quizMarks } = req.body;

  const resultModel = {
    quizId: req.params.quizId,
    userId: req.user._id,
    quizMarks,
  };

  const result = await (await Result.create(resultModel)).save();

  const performance = await Performance.findOne({
    UserId: req.user._id,
    CourseId: req.params.courseId,
  });

  performance.totalQuiz += 1;

  const stats = quizMarks + performance.totalmarks;

  performance.totalmarks = stats / performance.totalQuiz;

  await performance.save();

  res.send({ result });
});

router.get("/class/overall/:courseId", async (req, res) => {
  const performance = await Performance.findOne({
    UserId: req.user._id,
    CourseId: req.params.courseId,
  });

  res.send({ total: performance.totalmarks });
});

module.exports = router;
