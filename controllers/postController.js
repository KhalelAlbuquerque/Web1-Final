const postSchema = require('../db/models/Post')

module.exports = class postController{

    static async getPosts(req,res){

        const posts = await postSchema.findAll()
        
        return res.status(200).render('home', {posts})
    }

    static async findPost(req, res){

        const id = req.params.id

        const post = await postSchema.findOne({where: {id:id}})

        return res.status(200).json({message:"Post encontrado"})

    }

    static async createPostPost(req,res){

        const {title, description, startDate, endDate} = req.body
        const userid = req.session.userid

        try{
            const postData = {
                title,
                description,
                startDate,
                endDate,
                UserId:userid
            }

            await postSchema.create(postData)
            
            return res.status(201).json({message:"Post criado com sucesso"})

        }catch(err){
            return res.status(500).json({message:err.message})
        }

    }

}