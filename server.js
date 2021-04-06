const express = require('express')
const fs = require('fs')
const notes = require('./db/db.json')
const uniqueSlug = require('unique-slug')

const app = express()
const PORT = process.env.PORT || 7500

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html')
})

app.get('/api/notes', (req, res) => {
  res.json(notes)
})

app.post('/api/notes', (req, res) => {
  res.send(req.body)

  let newNote = req.body
  newNote.id = uniqueSlug();

  notes.push(newNote);

  noteString = JSON.stringify(notes);

  fs.writeFile('./db/db.json', noteString, err => {
    if (err) throw err
  })
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))
