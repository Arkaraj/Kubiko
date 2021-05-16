const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  quizMarks: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
});

module.exports = mongoose.model("Result", ResultSchema);
