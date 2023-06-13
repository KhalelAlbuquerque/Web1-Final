const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')


const app = express()


// Ajustando view engine para o handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const UserSchema = require('./models/User')
const PostSchema = require('./models/Post')


conn
.sync({force:true})
.then(()=>{
    app.listen(3000)
    console.log("Banco de dados ok")
}) 