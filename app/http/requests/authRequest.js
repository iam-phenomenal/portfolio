const User = require("../../model/User")
const {hash, validateHash} = require("../../others/hash/hasher")

//Registration
const register = async (req, res)=>{
    //Hash password
    const hashPassword = hash(req.body.password)
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
        superAdmin: req.body.superAdmin
    })
    try{
        const savedUser = await user.save()
        return res.status(201).json(savedUser)
    }catch(err){
        return res.status(500).json({"Error": err.message})
    }
}

//Login
const login = async(req, res)=>{
    try{
        let user = await User.findOne({username: req.body.username})
        if(!user) return res.status(403).json("Failed Authentication")
        const passwordValidation = validateHash(req.body.password, user.password)
        if(!passwordValidation){
            return res.status(403).json("Failed Authentication")
        }
        return res.status(200).json(user)
    }catch(err){
        return res.status(500).json({"Error": err.message})
    }
}

module.exports = {register, login}