const mongoose = require('mongoose');

const PerformanceSchema = new mongoose.Schema({
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    CourseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    totalmarks: { type: Number, required: true, default: 0 },
    totalQuiz: { type: Number, required: true, default: 0 }
});

module.exports = mongoose.model('Performance', PerformanceSchema);
