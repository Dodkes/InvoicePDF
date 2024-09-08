import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bcrypt from "bcrypt";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 8080;
const saltRounds = 10;
app.use(express.json());

app.post("/costumerData", (req, res) => {
  fs.readFile(path.join(__dirname, "db.json"), "utf8", (err, data) => {
    const parsedData = JSON.parse(data);

    const getIndex = parsedData.findIndex(
      (user) => user.providerData.email === req.body.signedUser
    );

    parsedData[getIndex].costumerData = req.body.costumerData;

    fs.writeFile(
      path.join(__dirname, "db.json"),
      JSON.stringify(parsedData, null, 10),
      () => {
        res.sendStatus(200);
      }
    );
  });
});

app.post("/providerData", (req, res) => {
  fs.readFile(path.join(__dirname, "db.json"), "utf8", (err, data) => {
    const parsedData = JSON.parse(data);

    const getIndex = parsedData.findIndex(
      (user) => user.providerData.email === req.body.email
    );

    parsedData[getIndex].providerData = req.body;

    fs.writeFile(
      path.join(__dirname, "db.json"),
      JSON.stringify(parsedData, null, 10),
      () => {
        res.sendStatus(200);
      }
    );
  });
});

app.post("/login", (req, res) => {
  fs.readFile(path.join(__dirname, "db.json"), "utf8", async (err, data) => {
    const parsedData = JSON.parse(data);
    const verifyUser = parsedData.filter(
      (user) => user.email === req.body.email
    );

    if (verifyUser.length !== 1) {
      return res.sendStatus(409);
    }

    const match = await bcrypt.compare(
      req.body.password,
      verifyUser[0].password
    );

    if (match) {
      const response = {
        providerData: verifyUser[0].providerData,
        costumerData: verifyUser[0].costumerData,
      };
      res.send(response);
    } else {
      res.sendStatus(401);
    }
  });
});

app.post("/register", (req, res) => {
  fs.readFile(path.join(__dirname, "db.json"), "utf8", async (err, data) => {
    const dbData = JSON.parse(data);
    const verifyUser = dbData.filter((user) => user.email === req.body.email);
    if (verifyUser.length) {
      res.sendStatus(409);
      return;
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      const newUser = {
        email: req.body.email,
        password: hashedPassword,
        providerData: {
          email: req.body.email,
          name: "",
          organisation: "",
          street: "",
          city: "",
          ZIP: "",
          country: "",
          ICO: "",
          DIC: "",
          registered: "",
          IBAN: "",
        },
        costumerData: {
          name: "",
          street: "",
          city: "",
          ZIP: "",
          country: "",
          ICO: "",
          DIC: "",
        },
      };
      dbData.push(newUser);

      fs.writeFile(
        path.join(__dirname, "db.json"),
        JSON.stringify(dbData, null, 10),
        () => {
          res.sendStatus(200);
        }
      );
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
