const express = require('express')
const app = express()

const cors = require('cors')
const conn = require('./db/conn')

const PORT = 3000
const hostname = 'localhost'

// middleware ---------------------------

app.use(express.urlencoded)
app.use(express.json())
app.use(cors())

// --------------------------------------

app.post('/leitor', leitorController.cadastrar)
app.get('/', (req, res) => {
    res.status(200).json({ message: "Aplicação Rodando" })
})

// server -------------------------------

conn.sync()
    .then(() => {
        app.listen(PORT, hostname, () => {
            console.log(`Sevidor rodando em http://${hostname}:${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Erro ao sincronizar com o Banco de Dados!', err)
    })