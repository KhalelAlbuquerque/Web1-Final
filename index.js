const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const app = express()


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

conn.sync().then(()=>{
    app.listen(3000)
    console.log("Banco de dados ok")
})