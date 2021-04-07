const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({

    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    title: { type: String, min: 3, max: 50, required: true },
    description: { type: String, required: true },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    results: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Result' }],

})

module.exports = mongoose.model('Quiz', QuizSchema)