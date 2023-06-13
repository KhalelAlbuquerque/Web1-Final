const db = require('../db/conn')
const { DataTypes } = require("sequelize")

const User = db.define('User',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    identificationNumber:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    position:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = User