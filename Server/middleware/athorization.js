const {Product} = require("../models")


async function authorizatioAdminOnly(req, res, next) {
    try {
        if (req.user.role !== "Admin") throw {
            name: "Not Authorization/forbidden"
        }
        next()
    } catch (error) {
        next(error)
    }
}



async function authorizationStaff(req,res,next){
    try {
        const{id} = req.params
        const product = await Product.findByPk(id)
        if (!product) throw {name : "Not Found"}
        if (req.user.id !== product.authorId) throw { name : "forbiden"
        }
    } catch (error) {
        next(error)
        
    }
} 


module.exports = {authorizatioAdminOnly,authorizationStaff}
