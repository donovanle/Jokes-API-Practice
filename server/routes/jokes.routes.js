const JokeController = require('../controllers/jokes.controller')

module.exports = app =>{
    app.get("/api/jokes", JokeController.allJokes)
    app.get("/api/jokes/:id", JokeController.oneJokes)
    app.post("/api/jokes/new", JokeController.createJokes)
    app.put("/api/jokes/update/:id", JokeController.updateJokes)
    app.delete("/api/jokes/delete/:id", JokeController.deleteJokes)
} 