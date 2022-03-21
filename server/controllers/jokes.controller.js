const { response } = require("express")
const { joke } = require("./../models/jokes.model")

module.exports.allJokes = (req, res) => {
    joke.find()
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

module.exports.oneJokes = (req, res) => {
    joke.findOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

module.exports.createJokes = (req, res) => {
    joke.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

module.exports.updateJokes = (req, res) => {
    joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

module.exports.deleteJokes = (req, res) => {
    joke.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.json(err))
} 