const express = require('express')
const path = require('path')
const fs = require('fs')
const notes = require('./db/db.json')

const app = express()
const PORT = process.env.PORT || 7500

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html');
});

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.post('/api/notes', (req, res) => {
  res.send(req.body)
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))
