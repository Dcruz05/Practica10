const express = require('express')
const app = express()

let PUERTO = process.env.PORT||3000

app.get('/person/:id', (req, res) => {
    res.send("<h1>Person: "+ req.params.id + "</h1>")
})
app.get('/api', (req,res) => {
    res.json({firstname: 'David',lastname: 'Cruz'})
});

app.listen(PUERTO)