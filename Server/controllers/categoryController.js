const {
    Category
} = require("../models")


class categoryController {
    static async getCategory(req, res, next) {
        try {
            let data = await Category.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    
    static async craeteCategory(req,res,next){
        try {
            console.log("masuk");
            let data = await Category.create(req.body)
            res.status(201).json({data})
        } catch (error) {
         next(error)   
        }
    }
    
    static async updateCategory(req,res,next){
        try {
            const{id} = req.params
            let category = await Category.findByPk(id)
            if (!category) throw {name :"Not Found"}
            const updataeCategory = await category.update(req.body)
            res.status(200).json({updataeCategory})            
        } catch (error) {
            next(error)            
        }
    } 
    
    static async deletCategory(req,res,next){
        try {
                   
            const category = await Category.findByPk(req.params.id)
          
            if (!category) throw {name :"Not Found"}

            await category.destroy()
            res.status(200).json({message : `Category ${category.name} has been deleted`})

        } catch (error) {
            next(error)            
        }
    }
}



module.exports = categoryController