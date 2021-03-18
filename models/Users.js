const mongoose = require('mongoose');

// Work in progress not the proper schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 15
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["Teacher", "Student"],
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)