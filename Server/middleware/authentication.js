

const{User} = require("../models")
const { verifyToken } = require("../helpers/jwt")

async function authentication(req,res,next){
    try {        
    //cek apakah user bawa token atau tidak
     const {authorization} = req.headers
     if (!authorization) throw {name : "InvalidToken"        
     }
     //cek apakah tipe tokenya barier
     const[type,token] = authorization.split(" ")
     if (type !== "Bearer") throw {name : "InvalidToken"

     } 
     //cek apakah token asli atau tidak

     const {id} = verifyToken(token)//dari login

     //cek apakah isi token sama dengan di database

     const user = await User.findByPk(id)
     if(!user)throw{name : "InvalidToken"}

     req.user = user
     //lanjut ke andpoint

     next()

     //selesai


    } catch (error) {
        next(error)
    }
}




module.exports = authentication

