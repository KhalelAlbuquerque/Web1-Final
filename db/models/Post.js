const db = require('../conn')
const { DataTypes } = require("sequelize")
const UserSchema = require('./User')

const Post = db.define('Post',{
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    startDate:{
        type:DataTypes.DATE,
        allowNull:false
    },
    endDate:{
        type:DataTypes.DATE,
        allowNull:false,
    }
})

Post.belongsTo(UserSchema)
UserSchema.hasOne(Post)

module.exports = Post

