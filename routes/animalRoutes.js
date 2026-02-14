import express from "express"
import * as path from "path"

const animalRouter = express.Router()
const __dirname = path.resolve()

animalRouter.get("/animal/:id", (req, res) => {

  res.render(
    path.join(__dirname, "/views/pages/animal"))
})

export default animalRouter