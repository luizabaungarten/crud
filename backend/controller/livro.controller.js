const Livro = require('../models/Livro')

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.codLivro ||!valores.titulo || !valores.genero || !valores.preco || !valores.qtdeExemplares || !valores.dataAquisicao) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' })
    }

    try {
        await Livro.create(valores)
        res.status(201).json({ message: 'Livro cadastrado com sucesso!' })
    } catch (err) {
        console.error('Não foi possível cadastrar o Livro', err)
        res.status(500).json({ message: 'Não foi possível cadastrar o Livro' })
    }
}

const listar = async (req, res) => {
    try {
        const dados = await Livro.findAll()
        res.status(200).json(dados)
    } catch (err) {
        console.error('Não foi possível listar o Livro', err)
        res.status(500).json({ message: 'Não foi possível listar o Livro' })
    }
}

const consultarPorCod = async (req, res) => {
    const id = req.params.id
    try {
        const dados = await Livro.findByPk(id)
        if (!dados) {
            return res.status(404).json({ message: 'Livro não encontrado!' })
        }
        res.status(200).json(dados)
    } catch (err) {
        console.error('Não foi possível encontrar o livro', err)
        res.status(500).json({ message: 'Não foi possível encontrar o livro' })
    }
}

const consultarPorNome = async (req, res) => {
    const titulo = req.params.titulo
    try {
        const dados = await Livro.findOne({ where: { titulo: titulo } })
        if (!dados) {
            return res.status(404).json({ message: 'O título do livro não foi encontrado!' })
        }
        res.status(200).json(dados)
    } catch (err) {
        console.error('Não foi possível encontrar o título do livro!', err)
        res.status(500).json({ message: 'Não foi possível encontrar o título do livro!' })
    }
}

const atualizar = async (req, res) => {
    const id = req.params.id
    const valores = req.body
    try {
        let dados = await Livro.findByPk(id)
        if (!dados) {
            res.status(404).json({ message: 'Livro não encontrado no banco de dados!' })
        } else {
            await Livro.update(valores, { where: { codLivro: id } })
            dados = await Livro.findByPk(id)
            res.status(200).json(dados)
        }
    } catch (err) {
        console.error('Não foi possível atualizar o Livro', err)
        res.status(500).json({ message: 'Não foi possível atualizar o Livro' })
    }
}

const apagar = async (req, res) => {
    const id = req.params.id
    try {
        const dados = await Livro.findByPk(id)
        if (!dados) {
            res.status(404).json({ message: 'Livro não encontrado no banco de dados!' })
        } else {
            await Livro.destroy({ where: { codLivro: id } })
            res.status(200).json({ message: 'Livro excluído com sucesso!' })
        }
    } catch (err) {
        console.error('Não foi possível excluir o Livro', err)
        res.status(500).json({ message: 'Não foi possível excluir o Livro' })
    }
}

module.exports = { cadastrar, listar, consultarPorCod, consultarPorNome, atualizar, apagar,  }