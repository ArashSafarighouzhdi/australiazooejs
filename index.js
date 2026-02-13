import express from "express";
import animalRouter from "./routes/animalRoutes.js";
import * as path from "path";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

const __dirname = path.resolve();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});


app.use("/", animalRouter)

app.listen(port, () => console.log(`Server is running on port ${port}`));
