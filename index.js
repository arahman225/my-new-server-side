const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PROT || 5000;



const users = [
    { id: 1, name: "sadik", email: "hadik1@gmail.com" },
    { id: 2, name: "sadik", email: "hadik@gmail.com" },
    { id: 3, name: "sadik", email: "sadik@gmail.com" }
]

app.get('/', (req, res) => {
    res.send('Hi, wolrd')
})

app.use(express.json())

app.use(cors())
app.post('/users',(req, res) =>{
    console.log('Api hitting')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length +1;
    users.push(newUser)
    res.send(newUser)
})

app.get('/users',(req, res) =>{
    res.send(users)
})



app.listen(port, () => {
    console.log(`Running on the port ${port}`)
})