const express = require("express");
const Course = require("../models/Course");
const Performance = require("../models/Performance");
const Quiz = require("../models/Quiz");
const Poll = require("../models/Poll");
const Option = require("../models/Option");
const Result = require("../models/Result");
const User = require("../models/User");
const router = express.Router();

// Get all courses for a pirticular student
router.get("/course", async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate({
      path: "courses",
      populate: {
        path: "creator",
      },
    });

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

          let performanceModel = {
            UserId: req.user._id,
            CourseId: course._id,
          };

          Performance.create(performanceModel, (err, performance) => {
            if (err) {
              console.log(err);
              res.status.apply(500).json({ err, msgError: true });
            } else {
              res.send({
                course,
                msg: `Joined Room ${course.name}`,
                msgError: false,
              });
            }
          });
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
  user.courses = user.courses.filter((c) => c != req.params.courseId);

  await user.save();

  const course = await Course.findById(req.params.courseId);

  course.students.filter((s) => s != req.user._id);
  await course.save();

  res.send({ user });
});

// Students can write quizzes
// Work required
router.post("/quiz/:quizId", async (req, res) => {
  const { quizMarks } = req.body;

  Quiz.findById(req.params.quizId)
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

// Submit Poll
router.post("/poll/:optionId", async (req, res) => {
  try {
    const option = await Option.findById(req.params.optionId);

    option.clicked += 1;

    await option.save();

    res.json({ option });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/marks/:quizId/:courseId", async (req, res) => {
  const { quizMarks } = req.body;

  const resultModel = {
    quizId: req.params.quizId,
    userId: req.user._id,
    quizMarks,
  };

  try {
    Result.create(resultModel, async (err, result) => {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        const quiz = await Quiz.findById(req.params.quizId);

        quiz.results.push(result._id);
        await quiz.save();

        const performance = await Performance.findOne({
          UserId: req.user._id,
          CourseId: req.params.courseId,
        });
        performance.totalQuiz += 1;

        const stats = quizMarks + performance.totalmarks;

        performance.totalmarks = stats / performance.totalQuiz;

        await performance.save();

        res.send({ result });
      }
    });
  } catch (err) {
    throw err;
  }
});

router.get("/class/overall/:courseId", async (req, res) => {
  const performance = await Performance.findOne({
    UserId: req.user._id,
    CourseId: req.params.courseId,
  });

  res.send({ performance });
});

module.exports = router;
