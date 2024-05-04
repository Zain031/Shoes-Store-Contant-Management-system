const express = require('express')
const authentication = require('../middleware/authentication')
const categoryController = require('../controllers/categoryController')
const router = express.Router()


router.get("/", categoryController.getCategory)

router.post("/", categoryController.craeteCategory)

router.put("/:id", categoryController.updateCategory)

router.delete("/:id", categoryController.deletCategory)

module.exports = router