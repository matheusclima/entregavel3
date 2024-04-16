const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3030

app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

app.get("/", (req, res) => {
    return res.send("Bem vindo")
})

app.post("/soma", (req, res) => {
    let body = req.body
    let resultado = soma(body.a, body.b)
    return res.send(`O resultado da soma é: ${resultado}`)
})

app.post("/subtracao", (req, res) => {
    let body = req.body
    let resultado = subtracao(body.a, body.b)
    return res.send(`O resultado da subtracao é: ${resultado}`)
})

app.post("/multiplicacao", (req, res) => {
    let body = req.body
    let resultado = multiplicacao(body.a, body.b)
    return res.send(`O resultado da multiplicacao é: ${resultado}`)
})

app.post("/divisao", (req, res) => {
    let body = req.body
    let resultado = divisao(body.a, body.b)
    return res.send(`O resultado da divisao é: ${resultado.toFixed(2)}`)
})

const soma = (a, b) => {
    return a+b
}

const subtracao = (a, b) => {
    return a-b
}

const multiplicacao = (a, b) => {
    return a*b
}

const divisao = (a, b) => {
    if(b != 0) return a/b
    console.log("Operacao impossivel")
}


