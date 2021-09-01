import jwt from 'jsonwebtoken'

const auth = function(req, res, next){
    const {auth} = req.headers
    if(!auth) return res.status(401).json({message: "token not found"})
    jwt.verify(auth, process.env.API_SECRET, (err,decoded)=>{
        if(err){
            return res.status(403).json({message: "Invalid token"})
        }
        console.log(decoded)
    })
    return next()
}

const generateToken = async (payload)=>{
    const token = await jwt.sign({id:payload}, process.env.API_SECRET,{expiresIn: "1h"})
    return token
}

export default {auth, generateToken}

