const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Desafio: criar endpoint /oi que exibe "Olá, mundo!"
app.get('/oi', function (req, res) {
  res.send('Olá, mundo!')
})

const lista = ('rick sanchez','morty smith','summer smith')

// read all
app.get('/item', function (req, res) {

  res.send('read all')
})
 

app.listen(3000)  

