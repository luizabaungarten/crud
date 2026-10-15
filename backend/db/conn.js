const { Sequelize } = require('sequelize')
const db = new Sequelize ('db_biblioteca', 'root', 'senai' , {
    port: 3306,
    host: 'localhost',
    dialect: 'mysql'
})