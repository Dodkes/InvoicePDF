// import { createServer } from "node:http"
// import { JSONFilePreset } from 'lowdb/node'

// // Read or create db.json
// const defaultData = { posts: [] }
// const db = await JSONFilePreset('db.json', defaultData)

// // Update db.json
// await db.update((data) => {
//     // data.posts.push('hello ' + Math.random())
//     data.posts.push(new Date())
// });


// // db.data.posts.push('hello ' + Math.random());

// await db.read();
// console.log(db.data);

// await db.write();

// const server = createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(db.data));
// });

// server.listen(8080);






import express from 'express'
const app = express()
const port = 3000

const data = [
    {user1: 'Dodo'},
    {user2: 'Filip'}
]

app.get('/', (req, res) => {
  res.send(data)
  console.log(data)
})

app.get('/users', (req, res) => {
    res.json(data)
    console.log('Users')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
