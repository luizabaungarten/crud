const Leitor = require('../models/Leitor')

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.codLeitor || !valores.nome || !valores.email || !valores.telefone ) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' })
    }

    try {
        await Leitor.create(valores)
        res.status(201).json({ message: 'Leitor cadastrado com sucesso!' })
    } catch (err) {
        console.error('Não foi possível cadastrar o Leitor', err)
        res.status(500).json({ message: 'Não foi possível cadastrar o Leitor' })
    }
}

const listar = async (req, res) => {
    try {
        const dados = await Leitor.findAll()
        res.status(200).json(dados)
    } catch (err) {
        console.error('Não foi possível listar o Leitor', err)
        res.status(500).json({ message: 'Não foi possível listar o Leitor' })
    }
}

const consultarPorCod = async (req, res) => {
    const id = req.params.id
    try {
        const dados = await Leitor.findByPk(id)
        if (!dados) {
            return res.status(404).json({ message: 'Leitor não encontrado!' })
        }
        res.status(200).json(dados)
    } catch (err) {
        console.error('Não foi possível encontrar o Leitor', err)
        res.status(500).json({ message: 'Não foi possível encontrar o Leitor' })
    }
}

const consultarPorNome = async (req, res) => {
    const nome = req.params.nome
    try {
        const dados = await Leitor.findOne({ where: { nome: nome } })
        if (!dados) {
            return res.status(404).json({ message: 'Nome do Leitor não encontrado!' })
        }
        res.status(200).json(dados)
    } catch (err) {
        console.error('Não foi possível encontrar o Nome do Leitor', err)
        res.status(500).json({ message: 'Não foi possível encontrar o Nome do Leitor' })
    }
}

const atualizar = async (req, res) => {
    const id = req.params.id
    const valores = req.body
    try {
        let dados = await Leitor.findByPk(id)
        if (!dados) {
            res.status(404).json({ message: 'Leitor não encontrado no banco de dados!' })
        } else {
            await Leitor.update(valores, { where: { codLeitor: id } })
            dados = await Leitor.findByPk(id)
            res.status(200).json(dados)
        }
    } catch (err) {
        console.error('Não foi possível atualizar o Leitor', err)
        res.status(500).json({ message: 'Não foi possível atualizar o Leitor' })
    }
}

const apagar = async (req, res) => {
    const id = req.params.id
    try {
        const dados = await Leitor.findByPk(id)
        if (!dados) {
            res.status(404).json({ message: 'Leitor não encontrado no banco de dados!' })
        } else {
            await Leitor.destroy({ where: { codLeitor: id } })
            res.status(200).json({ message: 'Leitor excluído com sucesso!' })
        }
    } catch (err) {
        console.error('Não foi possível excluir o Leitor', err)
        res.status(500).json({ message: 'Não foi possível excluir o Leitor' })
    }
}

module.exports = { cadastrar, listar, consultarPorCod, consultarPorNome, atualizar, apagar }