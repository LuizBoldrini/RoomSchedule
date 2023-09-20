const mongoose = require('mongoose')

const Reserve = new mongoose.Schema({
    course: {
        type: String
    },
    semester: {
        type: String
    },
    date: {
        type: Date
    },
    requester: {
        type: String
    }
})

const Reserves = mongoose.model("Reserves", Reserve)
module.exports = Reserves