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
      JSON.stringify(parsedData, null, 10),
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
    if (verifyUser.length === 1) {
      res.send(verifyUser[0].providerData);
    } else {
      res.sendStatus(401);
    }
  });
});

app.post("/register", (req, res) => {
  fs.readFile(path.join(__dirname, "db.json"), "utf8", (err, data) => {
    const dbData = JSON.parse(data);
    const verifyUser = dbData.filter((user) => user.email === req.body.email);
    if (verifyUser.length) {
      res.sendStatus(409);
      return;
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
      dbData.push(newUser);

      fs.writeFile(
        path.join(__dirname, "db.json"),
        JSON.stringify(dbData, null, 10),
        (err) => {
          // if (err) {
          //   console.log("Error saving to DB:", err);
          //   res.sendStatus(500, "Internal server error");
          //   return;
          // }
          res.send("File written successfully");
        }
      );
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
