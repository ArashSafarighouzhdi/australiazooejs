import express from "express";
import * as path from "path";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

const __dirname = path.resolve();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
      res.render(
        path.join(__dirname, "/views/pages/home"), 
        {   
          welcomeTitle: "Welcome Home Page"
        }
    )
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
