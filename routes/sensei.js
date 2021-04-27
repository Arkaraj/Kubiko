const express = require("express");
const Course = require("../models/Course");
const { default: Performance } = require("../models/Performance");
const Question = require("../models/Question");
const Quiz = require("../models/Quiz");
const User = require("../models/User");
const router = express.Router();

// creates Course room
router.post("/course", async (req, res) => {
  const { name, description } = req.body;

  const courseModel = {
    name,
    description,
    creator: [req.user._id],
  };

  const course = await (await Course.create(courseModel)).save();
  res.send({ course });
});

router.get("/course", async (req, res) => {
  // this will return a array
  const course = await Course.find({ creator: req.user._id });
  res.send({ course });
});

// Gets all student in the course
router.get("/students", async (req, res) => {
  const courseModel = await Course.find({ creator: req.user._id });

  const [course] = courseModel.map((c) => c.students);
  // course is an array of student _ids

  // res.send({ course });
  res.send({ students: course });
});

router.delete("/:courseId", async (req, res) => {
  await Course.findByIdAndDelete(req.params.courseId);
  res.send({ msg: "Deleted the course", status: true });
});

// Teacher will create quiz over here
router.post("/createQuiz/:courseId", async (req, res) => {
  const { title, description } = req.body;

  const quizModel = {
    title,
    description,
    courseId: req.params.courseId,
  };

  const quiz = await (await Quiz.create(quizModel)).save();

  // Insert in course, .... not necessary

  res.send({ quiz });
});

// Teacher will add question here
router.post("/question/:quizId", async (req, res) => {
  const question = await (await Question.create(req.body)).save();

  const quiz = await Quiz.findById(req.params.quizId);

  quiz.questions.push(question._id);

  await quiz.save();

  res.send({ quiz });
});

router.get("/student/overall/:userId/:CourseId", async (req, res) => {
  const performance = await Performance.findOne({
    UserId: req.params.userId,
    CourseId: req.params.courseId,
  });

  // totalmarks = sum of all quizes results/(total no. of quiz) => decimal

  res.send({ performance: performance.totalmarks });
});

module.exports = router;
