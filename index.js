const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000 ;


// using middleware

app.use(cors())
app.use(express.json())


const users = [
  {
    id:1,
    name: "John Smith",
    age: 28,
    email: "john.smith@example.com",
    phone: "+1 (123) 456-7890"
  },
  {
    id:2,
    name: "Alice Johnson",
    age: 24,
    email: "alice.johnson@example.com",
    phone: "+1 (987) 654-3210"
  },
  {
    id:3,
    name: "Michael Davis",
    age: 32,
    email: "michael.davis@example.com",
    phone: "+1 (555) 123-4567"
  },
  {
    id:4,
    name: "Emily Brown",
    age: 29,
    email: "emily.brown@example.com",
    phone: "+1 (777) 888-9999"
  },
  { id:5,
    name: "Ava Martinez",
    age: 33,
    email: "ava.martinez@example.com",
    phone: "+1 (777) 777-7777"
  }
];


app.get('/', (req, res) => {
  res.send('User management system ')
})

app.get('/users', (req, res)=>{
    res.send(users)                                                 
})
app.post('/users', (req, res)=>{
  console.log('post api hitting')
  console.log(req.body)
  const newUser= req.body
  newUser.id = users.length + 1;
  users.push(newUser)
  res.send(newUser)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})