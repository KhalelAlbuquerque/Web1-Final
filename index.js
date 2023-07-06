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

// app.use(session({
//     name:'session',
//     saveUninitialized:false,
//     secret:"senha",
//     resave:false,
//     cookie:{
//         secure:false,
//         maxAge:60*60*1000,
//         httpOnly:true,
//         expires: new Date(Date.now+60*60*1000)
//     }
// }))


// app.use((req,res,next)=>{

//     if(req.session.userid){
//         res.locals.session = req.session
//     }

//     next()

// })



const UserSchema = require('./db/models/User')
const PostSchema = require('./db/models/Post')


const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')

app.use('/user', userRoutes)
app.use('/', postRoutes)

conn
.sync()
.then(()=>{
    app.listen(3000)
    console.log("Banco de dados ok")
}) 