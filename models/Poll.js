const mongoose = require("mongoose");

const PollSchema = new mongoose.Schema({
  title: { type: String, required: true },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  question: { type: String, required: true },
  options: [{ type: mongoose.Types.ObjectId, ref: "Option" }],
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model("Poll", PollSchema);
