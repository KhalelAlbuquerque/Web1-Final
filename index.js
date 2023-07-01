const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


// Ajustando view engine para o handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const UserSchema = require('./db/models/User')
const PostSchema = require('./db/models/Post')


const userRoutes = require('./routes/userRoutes')

app.use('/user', userRoutes)

conn
.sync()
.then(()=>{
    app.listen(3000)
    console.log("Banco de dados ok")
}) 