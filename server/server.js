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

app.get('/api', (req, res) => {
  fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
    res.json(data)
    console.log(data)
  })
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