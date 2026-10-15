const Leitor = require('../models/Leitor')
const Livro = require('../models/Livro')

Leitor.hasMany(Livro, {
    foreignKey: 'idLivro',
    as: 'livroLeitor',
    onDelete: 'CASCADE'
})

Livro.belongsTo(Leitor, {
    foreignKey: 'idLivro',
    as: 'leitorLivro'
})

module.exports = { Usuario, Produto }