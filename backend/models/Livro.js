const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Livro = db.define('livro', {
    codLivro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    genero: {
        type: DataTypes.ENUM('FICCAO', 'TECNICO'),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    qtdeExemplares: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    dataAquisicao: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'produtos'
})

module.exports = Livro