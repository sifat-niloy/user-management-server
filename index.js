const express = require('express')
const app = express()
const port = process.env.PORT || 5000


// using middleware
app.use(express.json())

const users = [
  {
    name: "John Smith",
    age: 28,
    email: "john.smith@example.com",
    phone: "+1 (123) 456-7890"
  },
  {
    name: "Alice Johnson",
    age: 24,
    email: "alice.johnson@example.com",
    phone: "+1 (987) 654-3210"
  },
  {
    name: "Michael Davis",
    age: 32,
    email: "michael.davis@example.com",
    phone: "+1 (555) 123-4567"
  },
  {
    name: "Emily Brown",
    age: 29,
    email: "emily.brown@example.com",
    phone: "+1 (777) 888-9999"
  },
  {
    name: "Daniel Wilson",
    age: 35,
    email: "daniel.wilson@example.com",
    phone: "+1 (111) 222-3333"
  },
  {
    name: "Sophia Lee",
    age: 27,
    email: "sophia.lee@example.com",
    phone: "+1 (555) 555-5555"
  },
  {
    name: "William Taylor",
    age: 30,
    email: "william.taylor@example.com",
    phone: "+1 (999) 999-9999"
  },
  {
    name: "Olivia Anderson",
    age: 26,
    email: "olivia.anderson@example.com",
    phone: "+1 (888) 888-8888"
  },
  {
    name: "James Miller",
    age: 31,
    email: "james.miller@example.com",
    phone: "+1 (444) 333-2222"
  },
  {
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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})