import express from "express";
import * as path from "path";
import animals from "../data/animals.js";

const groupRouter = express.Router();
const __dirname = path.resolve();

groupRouter.get("/group/:category", (req, res) => {
  const category = req.params.category;
  const filteredAnimals = animals.filter(
    (a) => a.group.toLowerCase() === category.toLowerCase(),
  );

  filteredAnimals.forEach((a) => {
    a.image = `/images/${category}/${a.id}.png`;
  });

  res.render(path.join(__dirname, "/views/pages/group"), {
    allAnimals: filteredAnimals,
    welcomeTitle: category.charAt(0).toUpperCase() + category.slice(1),
    subTitle: `Explore our amazing collection of ${category}.`,
    documentTitle: category,
  });
});

export default groupRouter;
