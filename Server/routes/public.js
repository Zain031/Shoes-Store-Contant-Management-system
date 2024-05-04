const express = require('express')
const productController = require('../controllers/productControllerr')
const categoryController = require('../controllers/categoryController')
const router = express.Router()


router.get("/products", productController.getAllProductsOnPublic)

router.get("/products/:id", productController.getProductByIdOnPublic)

router.get("/categories", categoryController.getCategory)


module.exports = router