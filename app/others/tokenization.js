require("dotenv").config()
const jwt = require("jsonwebtoken")

const signToken = (user)=>{
    const accessToken = jwt.sign(
        {
            id: user._id, 
            admin: user.admin,
            developer: user.developer
        }, process.env.JWT_SEC, {expiresIn: "1h"}
    )
    return accessToken
}

const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.tokenResult
    if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
            if(err) return res.status(403).json({message: "Invalid Token"})
            req.user = user
            next()
        })
    }else{
        return res.status(403).json({message: "Not authenticated"})
    }
}

const tokenAuthentication= (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id) next()
        else{
            return res.status(403).json("Permission denied")
        }
    })
}

const devAuthentication = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.developer) return next()
        else return res.status(401).json("Permission denied")
    })
}

const adminAuthentication = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.admin) return next()
        else return res.status(401).json("Permission denied")
    })
}

module.exports = {signToken, verifyToken, tokenAuthentication, devAuthentication, adminAuthentication}