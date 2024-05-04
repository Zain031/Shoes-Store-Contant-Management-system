const express = require('express')
const Controller = require('../controllers/productControllerr')
const router = express.Router()


const {
    authorizationStaff
} = require('../middleware/athorization');
const productController = require('../controllers/productControllerr');



const multer = require("multer");
const storage = multer.memoryStorage()
const upload = multer({storage: storage})

router.get("/",  productController.getProduct)

router.post("/",  productController.addProduct)

router.put("/:id", productController.putProduct)

router.delete("/:id", productController.deleteProduct)

router.patch("/:id", upload.single("imgUrl"), productController.patchProduct)

router.get("/:id",  productController.getProductById)


module.exports = router



