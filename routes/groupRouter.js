import express from "express"
import * as path from "path"

const groupRouter = express.Router()
const __dirname = path.resolve()


groupRouter.get("/group/:category", (req, res) => {

   res.render(
    path.join(__dirname, "/views/pages/group"))
})

export default groupRouter 