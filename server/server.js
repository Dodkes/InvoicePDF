import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()
const port = 8080
app.use(express.json())

const users = [
  {
    email: 'roth.malder@email.com',
    password: 'roth.malder@email.comroth.malder@email.com',
    organisation: 'Company Ltd.',
    name: 'Roth Malder',
    street: 'Jána Hollého 1056/5',
    city: 'Michalovce',
    ZIP: 71001,
    country: 'Slovensko',
    ICO: 55902227,
    DIC: 1120397267,
    registered: 'Okresný úrad Michalovce, Číslo živnostenského registra: 840-31636',
    IBAN: 'SK72 2222 0000 0029 6259 7873',
  },
  {
    email: "john.doe@email.sk",
    password: "john.doe@email.skjohn.doe@email.sk",
    name: "John Doe"
  },
  {
    email: "jane.doe@email.eu",
    password: "jane.doe@email.eujane.doe@email.eu",
    name: "Jane Doe"
  }
]

app.get('/api', (req, res) => {
  res.json(users)

  // fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
  //   res.json(data)
  // })
})

app.post('/api', (req, res) => {

  fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(req.body), () => {
      res.send('File written successfully')

  })
  console.log(req.body);
  res.send('POST received');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})