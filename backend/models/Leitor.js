const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Leitor = db.define('usuario', {
    codLeitor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING(11),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'leitores'
})

module.exports = Leitor