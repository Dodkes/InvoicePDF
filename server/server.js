import express from 'express'

const app = express()
const port = 8080

const users = [
  {
    email: 'roth.malder@email.com',
    password: 'roth.malder@email.comroth.malder@email.com',
    name: 'Roth Malder',
    street: 'Jána Hollého 1056/5',
    city: 'Michalovce',
    ZIP: 71001,
    country: 'Slovensko',
    ICO: 55902227,
    DIC: 1120397267,
    registered: 'Okresný úrad Michalovce, Číslo živnostenského registra: 840-31636',
    IBAN: 'SK72 2222 0000 0029 6259 7873'
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
})


app.get('/', (req, res) => {
  res.send(users)
  console.log(users)
})

app.get('/users', (req, res) => {
    res.json(users)
    console.log('Users')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})