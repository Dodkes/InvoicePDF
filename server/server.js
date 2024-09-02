import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 8080;
app.use(express.json());

app.post("/users", (req, res) => {
  fs.readFile(path.join(__dirname, "db.json"), "utf8", (err, data) => {
    const parsedData = JSON.parse(data);

    const match = parsedData.filter(
      (user) => user.password === req.body.password
    );
    const getIndex = parsedData.indexOf(match[0]);

    parsedData[getIndex] = req.body;

    fs.writeFile(
      path.join(__dirname, "db.json"),
      JSON.stringify(parsedData),
      () => {
        res.send("File written successfully");
      }
    );
  });
});

app.post("/api", (req, res) => {
  fs.readFile(path.join(__dirname, "db.json"), "utf8", (err, data) => {
    const parsedData = JSON.parse(data);
    const verifyUser = parsedData.filter(
      (user) =>
        user.email === req.body.email && user.password === req.body.password
    );
    res.send(verifyUser);
  });
});

app.post("/register", (req, res) => {
  fs.readFile(path.join(__dirname, "db.json"), "utf8", (err, data) => {
    const parsedData = JSON.parse(data);
    const verifyUser = parsedData.filter(
      (user) => user.email === req.body.email
    );
    if (verifyUser.length) {
      res.sendStatus(409);
    } else {
      const newUser = {
        email: req.body.email,
        password: req.body.password,
        name: "",
        organisation: "",
        street: "",
        city: "",
        ZIP: 0,
        country: "",
        ICO: 0,
        DIC: 0,
        registered: "",
        IBAN: "",
      };
      console.log(newUser);
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
