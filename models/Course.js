const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const CourseSchema = new mongoose.Schema({

    name: { type: String, min: 0, max: 15, default: "", required: true },
    code: { type: String, default: () => nanoid(6) },
    creator: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    quiz: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
    performance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Performance' }]

})

module.exports = mongoose.model('Course', CourseSchema)