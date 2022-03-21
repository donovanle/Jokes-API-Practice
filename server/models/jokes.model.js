const mongoose = require("mongoose")

const JokesSchema = new mongoose.Schema({
    setup : {
        type: String,
        minlength: [10, "Setup must be 10 characters minimum"]
    },
    punchline : {
        type: String,
        minlength: [3, "Punchline must be 3 characters minimum"]
    }
}, {timestamps : true})

module.exports.joke = mongoose.model('joke', JokesSchema) 