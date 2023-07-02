const userSchema = require('../db/models/User')
const bcrypt = require('bcrypt')


module.exports = class userController {

    static async findUser(req,res){
        const id = req.params.id

        const foundUser = await userSchema.findOne({where:{id}})
        
        if(!foundUser){
            return res.status(400).json({message:"Usuário não encontrado!"})
        }

        return res.status(200).json(foundUser)

    }


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

        await userSchema.create(userData)

        return res.status(200).json({message:`Usuário cadastrado!`,})
    }


    static async editUser(req,res){

        const {name, identificationNumber, phone, email, position} = req.body
        const id = await userSchema.findOne({where:{identificationNumber}}).id

        const user = await userSchema.findOne({where:{id}})

        if(!user){
            return res.status(400).json({message:"Usuário não encontrado!"})
        }

        const newUSerData = {
            name, 
            identificationNumber, 
            phone, 
            email, 
            position
        }

        await user.update(newUSerData ,{where:{id}})

        return res.status(200).json({message:`Usuário editado com sucesso!`})
    }

    

}