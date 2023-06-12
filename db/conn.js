const { Sequelize } = require('sequelize')

module.exports = new Sequelize('final-web', 'root', '1234',{
    dialect:'mysql',
    host:'localhost'
})