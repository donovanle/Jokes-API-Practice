const express = require("express")
const app = express()

require("./config/mongoose.config")


app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyUserRoutes = require("./routes/jokes.routes");
AllMyUserRoutes(app);


app.listen(8000, () => console.log("the server is on port 8000")); 