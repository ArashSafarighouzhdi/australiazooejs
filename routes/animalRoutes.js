import express from "express";
import * as path from "path";
import animals from "../data/animals.js";

const animalRouter = express.Router();
const __dirname = path.resolve();

animalRouter.get("/animal/:id", (req, res) => {
  const animal = animals.find((a) => a.id === req.params.is); ///a = animal///
  res.render(path.join(__dirname, "/views/pages/animal"), {
    allAnimals: animals,
    animal: animal,
    documentTitle: animal ? animal.name : "Animal Not Found",
  });
});

export default animalRouter;
