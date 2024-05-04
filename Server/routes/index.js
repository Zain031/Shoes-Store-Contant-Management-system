const express = require('express')
const router = express.Router()
const user = require("./user")
const category = require("./category")
const product = require("./product")
const publicRouter = require("./public")
const authentication = require('../middleware/authentication')



router.use(user)

router.use("/pub",publicRouter)

router.use("/products", authentication,product)

router.use("/categories", authentication, category)



module.exports = router