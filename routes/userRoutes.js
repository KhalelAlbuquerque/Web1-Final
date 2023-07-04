const express = require("express")
const router = express.Router()
const userController = require('../controllers/userController')


router.get('/:id', userController.findUserGet)
router.post('/create', userController.createUserPost)
router.post('/update/:id', userController.editUserPost)



module.exports = router