const userSchema = require('../db/models/User')
const bcrypt = require('bcrypt')


module.exports = class userController {

    static async createUser(req,res){
        const {name, identificationNumber, phone, email, password, position} = req.body

        const checkIDNumber = await userSchema.findOne({where:{identificationNumber}})
        if(checkIDNumber){
            return res.status(400).json({message:"CPF já cadastrado"})
        }
        
        const checkEmail = await userSchema.findOne({where:{email}})
        if(checkEmail){
            return res.status(400).json({message:"Email já cadastrado"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const userData={
            name,
            identificationNumber,
            phone,
            email,
            password:hashedPassword,
            position
        }

        const newUser = await userSchema.create(userData)

        return res.status(400).json({message:`Usuário cadastrado!\n\n${newUser}`,})
    }

}