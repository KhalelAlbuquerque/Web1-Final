const postSchema = require('../db/models/Post')

module.exports = class postController{

    static async getPosts(req,res){

        const posts = await postSchema.findAll({raw:true})
        
        return res.status(200).render('home', {posts})
    }

    static async findPost(req, res){

        const id = req.params.id

        const post = await postSchema.findOne({raw:true, where: {id:id}}) 

        // .map((element)=>element.get({plain:true}))

        return res.status(200).json({message:"Post encontrado"})

    }

    static async createPostPost(req,res){

        const {title, description, startDate, endDate, UserId} = req.body


        try{
            const postData = {
                title,
                description,
                startDate,
                endDate,
                UserId
            }

            await postSchema.create(postData)
            
            return res.status(201).json({message:"Post criado com sucesso"})

        }catch(err){
            return res.status(500).json({message:err.message})
        }

    }

}