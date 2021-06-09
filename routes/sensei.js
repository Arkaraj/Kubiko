const express = require("express");
const Course = require("../models/Course");
const Performance = require("../models/Performance");
const Poll = require("../models/Poll");
const Question = require("../models/Question");
const Quiz = require("../models/Quiz");
const User = require("../models/User");
const Option = require("../models/Option");
const Result = require("../models/Result");
const router = express.Router();

// creates Course room
router.post("/course", async (req, res) => {
  const { name, description } = req.body;

  const courseModel = {
    name,
    description,
    creator: [req.user._id],
    message: "All Quizzes in the room is Mandatory",
  };

  const course = await (await Course.create(courseModel)).save();
  res.send({
    course,
    msg: `Your Course Room is Created!, Course Code: ${course.code}`,
  });
});

router.get("/course", async (req, res) => {
  // this will return a array
  const course = await Course.find({ creator: req.user._id });
  res.send({ course });
});

router.post("/message/:courseId", async (req, res) => {
  const { message } = req.body;

  try {
    const course = await Course.findById(req.params.courseId);

    course.message = message;
    await course.save();

    res.json({ course });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// Gets all student in the course
router.get("/students/:courseId", async (req, res) => {
  const courseModel = await Course.findById(req.params.courseId).populate(
    "students"
  );

  // const [course] = courseModel.map((c) => c.students);
  // course is an array of student _ids

  // res.send({ course });
  res.send({ students: courseModel.students });
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

// Show Teacher the Quiz
router.get("/quiz/:quizId", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.quizId).populate("questions");

    res.json({ quiz });
  } catch (err) {
    throw err;
  }
});

// Teacher will add question here
router.post("/question/:quizId", async (req, res) => {
  const question = await (await Question.create(req.body)).save();

  const quiz = await Quiz.findById(req.params.quizId);

  quiz.questions.push(question._id);

  await quiz.save();

  res.send({ quiz });
});

// Create the Poll
router.post("/poll/:courseId", async (req, res) => {
  const { title, question } = req.body;

  const pollModel = {
    title,
    question,
    courseId: req.params.courseId,
  };

  const poll = await (await Poll.create(pollModel)).save();

  res.send({ poll });
});

router.post("/option/:pollId", async (req, res) => {
  const option = await (await Option.create(req.body)).save();

  const poll = await Poll.findById(req.params.pollId);

  poll.options.push(option._id);

  await poll.save();

  res.send({ poll });
});

// Show Teacher the Poll
router.get("/poll/:pollId", async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.pollId).populate("options");

    res.json({ poll });
  } catch (err) {
    throw err;
  }
});

// Freeze Quiz
router.put("/quiz/:quizId", async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.quizId, {
      $set: {
        available: false,
      },
    });

    res.status(200).json({ quiz });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Freeze Poll
router.put("/poll/:pollId", async (req, res) => {
  try {
    const poll = await Poll.findByIdAndUpdate(req.params.pollId, {
      $set: {
        available: false,
      },
    });

    res.status(200).json({ poll });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Show overall marks
router.get("/student/overall/:userId/:courseId", async (req, res) => {
  const performance = await Performance.findOne({
    UserId: req.params.userId,
    CourseId: req.params.courseId,
  });

  res.send({ performance });
});

// Get Quiz Results
router.get("/quizResult/:quizId", async (req, res) => {
  try {
    const result = await Result.find({ quizId: req.params.quizId })
      .populate("userId")
      .exec();

    // console.log(result);

    res.json({ result });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});
// Get Poll Results
router.get("/pollResult/:pollId", async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.pollId).populate("options");

    res.json({ poll });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
