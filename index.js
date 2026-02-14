import express from "express";
import * as path from "path";
import "dotenv/config";
import groupRouter from "./routes/groupRouter.js";
import animalRouter from "./routes/animalRoutes.js";
import animals from "./data/animals.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/home"), {
    welcomeTitle: "Welcome Home Page",
    subTitle: "Explore the amazing wildlife of Australia.",
    documentTitle: "Australia Zoo | Home",
    allAnimals: animals,
  });
});

app.use("/", animalRouter);
app.use("/", groupRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
