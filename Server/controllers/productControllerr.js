const {Product, Category} = require("../models")

const cloudinary = require("cloudinary").v2


cloudinary.config({
    cloud_name: "dwk7bi3m9",
    api_key: "731573416516423",
    api_secret: "CjEFCrn-lU8N9qoOaqOac2yS9xA",
    API_environment_variable: "CLOUDINARY_URL=cloudinary://731573416516423:CjEFCrn-lU8N9qoOaqOac2yS9xA@dwk7bi3m9"

});


class productController{
    static async getProduct(req,res,next){
        try {
            let data = await Product.findAll({
                include :{
                    model : Category
                }
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)            
        }               
    }   
    
    static async getProductById(req,res,next){
        try {  let {id} = req.params
        let data = await Product.findByPk(id)
        if (!data) throw {name : "Not Found"}
        res.status(200).json(data)            
        } catch (error) {
            next(error)            
        }      
    } 
  
    static async addProduct(req,res,next){
        try {
            let{name,description,price,stock,imgUrl,categoryId,authorId} = req.body
            let newProduct = await Product.create({
                name,description,price,stock,imgUrl,categoryId,authorId
    
            })
            res.status(201).json(newProduct)
        } catch (error) {
            next(error)
            
        }
    }
  
    static async putProduct(req,res,next){
        try {
           let {id} = req.params
            let data = await Product.findByPk(id)
            if (!data) throw {name : "Not Found"}


            let{name,description,price,stock,imgUrl,categoryId,authorId} = req.body
            let updateData = await data.update({
             name,description,price,stock,imgUrl,categoryId,authorId

            })
            res.status(200).json(updateData)            
        } catch (error) {
            next(error)
            
        }
    } 
    
    static async deleteProduct(req,res,next){
        try {       
            const {id} = req.params
            const data = await Product.findByPk(id)
            if (!data) throw {name : "Not Found"}
             await data.destroy()
            res.status(200).json({message : `${data.name} has been delete`})
        } catch (error) {
            next(error)
        }
    } 
    
    static async patchProduct(req,res,next){
        try {
            console.log("masuk");           
            let data = await Product.findByPk(req.params.id)
            
            if (!data) throw {name : "Not Found"}
            
            
            const base64Image = req.file.buffer.toString("base64");
            const base64Url = `data:${req.file.mimetype};base64,${base64Image}`           


            let result = await cloudinary.uploader.upload(base64Url)            

            await data.update({
                imgUrl : result.secure_url
            })
          
            res.status(200).json({message:`Image for "${data.name }" is update succesfull`})
            
        } catch (error) {
            next(error)            
        }        
    }  
    
    static async getAllProductsOnPublic (req, res, next) {
        try {
            let data = await Product.findAll({
                include :{
                    model : Category
                }
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)            
        }  
    }
    static async getProductByIdOnPublic (req, res, next) {
        try {
            const { id } = req.params;
            
            const productById = await Product.findByPk(id);

            if (!productById) {
                throw { name: "NotFound" };
            }
            res.status(200).json(productById);
        } catch (error) {
            next (error);
        }
    }
}



module.exports = productController