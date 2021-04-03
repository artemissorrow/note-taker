const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express()
const PORT = process.env.PORT || 7500

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'db.json')))

app.post('/api/notes', (req, res) => {
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));