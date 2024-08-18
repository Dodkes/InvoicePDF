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

app.post('/users', (req, res) => {
  // fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(req.body), () => {
  //     res.send('File written successfully')
  // })
  // console.log(req.body);
  // res.send('POST received');
})

app.post('/api', (req, res) => {
  fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
    const parsedData = JSON.parse(data)
    const verifyUser = parsedData.filter((user) => user.email === req.body.email && user.password === req.body.password)
    res.send(verifyUser)
  })

});




app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})