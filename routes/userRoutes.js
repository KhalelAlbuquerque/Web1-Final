const express = require("express")
const router = express.Router()
const userController = require('../controllers/userController')


router.get('/:id', userController.findUserGet)
router.post('/create', userController.createUserPost)
router.post('/update/:id', userController.editUserPost)
router.post('/delete/:id', userController.deleteUser)



module.exports = router