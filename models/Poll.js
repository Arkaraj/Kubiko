const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({

    name: { type: String, required: true },
    question: { type: String, max: 50, required: true },
    options: { type: mongoose.Types.ObjectId, ref: 'Option' },

})

module.exports = mongoose.model('Poll', PollSchema)