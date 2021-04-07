const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema({

    option: { type: String, required: true },
    clicked: { type: Number, required: true, default: 0 },

})

module.exports = mongoose.model('Option', OptionSchema)