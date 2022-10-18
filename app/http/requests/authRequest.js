const User = require("../../model/User")
const {hashPass, validateHash} = require("../../others/hash/hasher")

//Registration
const register = async (req, res)=>{
    //Hash password
    const hashPassword =await hashPass(req.body.password)
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
        superAdmin: req.body.superAdmin
    })
    try{
        const savedUser = await user.save()
        const {password, ...others} = savedUser._doc
        return res.status(201).json(others)
    }catch(err){
        return res.status(500).json({"Error": err.message})
    }
}

//Login
const login = async(req, res)=>{
    try{
        let user = await User.findOne({username: req.body.username})
        if(!user) return res.status(403).json("Failed Authentication")
        const passwordValidation = await validateHash(req.body.password, user.password)
        if(!passwordValidation){
            return res.status(403).json("Failed Authentication")
        }
        const {password, ...others} = user._doc
        return res.status(200).json(others)
    }catch(err){
        return res.status(500).json({"Error": err.message})
    }
}

module.exports = {register, login}