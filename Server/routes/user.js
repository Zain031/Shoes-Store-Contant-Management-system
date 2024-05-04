const express = require('express')
const { authorizatioAdminOnly } = require('../middleware/athorization')
const authentication = require('../middleware/authentication')
const userController = require('../controllers/userController')
const router = express.Router()


router.post("/register",authentication,authorizatioAdminOnly,  userController.register)

router.post("/login", userController.login)

module.exports = router