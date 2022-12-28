const User = require("../../model/User")
const {hashPass, validateHash} = require("../../others/hash/hasher")
const {signToken} = require("../../others/tokenization")
const { validationResult } = require("express-validator")

//Registration
const register = async (req, res)=>{
    const errors = validationResult(req)
    if(errors){
        return res.status(400).json({error: errors.array()})
    }
    let accountType
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        bio: req.body.bio,
        developer: req.body.developer,
        admin: req.body.admin
    })
    try{
        user.password = await hashPass(req.body.password)
        const savedUser = await user.save()
        const {password, ...others} = savedUser._doc
        if(req.body.developer) accountType = `dev/${savedUser.id}`
        else if(req.body.admin) accountType = `admin/${savedUser.id}`
        else accountType = `${savedUser.id}`
        const accessToken = signToken(savedUser)
        return res.status(201).json({
            message: "New user created",
            output: others,
            accessToken: accessToken,
            requests: [
                {
                    name: "Dashboard",
                    type: "GET",
                    desc: "Dashboard",
                    url: `http://localhost:4500/${accountType}`
                },{
                    name: "Delete",
                    type: "DELETE",
                    desc: "Delete user account",
                    url: `http://localhost:4500/${accountType}`
                }
            ]
        })
    }catch(err){
        return res.status(500).json({"Error": err})
    }
}

//Login
const login = async(req, res)=>{
    let accountType
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try{
        let user = await User.findOne({email: req.body.email})
        if(!user) return res.status(403).json("Failed Authentication")
        const passwordValidation = await validateHash(req.body.password, user.password)
        if(!passwordValidation){
            return res.status(403).json("Failed Authentication")
        }
        const {password, ...others} = user._doc
        if(req.body.developer) accountType = `dev/${user.id}`
        else if(req.body.admin) accountType = `admin/${user.id}`
        else accountType = `${user.id}`
        const accessToken = signToken(user)
        return res.status(201).json({
            message: "User logged in",
            output: others,
            accessToken: accessToken,
            requests: [
                {
                    name: "Dashboard",
                    type: "GET",
                    desc: "Dashboard",
                    url: `http://localhost:4500/${accountType}`
                },{
                    name: "Delete User",
                    type: "DELETE",
                    desc: "Delete user account",
                    url: `http://localhost:4500/${accountType}`
                },{
                    name: "Update User",
                    type: "POST",
                    desc: "Update user account",
                    url: `http://localhost:4500/${accountType}`
                }
            ]
        })
    }catch(err){
        return res.status(500).json({error: err.message})
    }
}

module.exports = {register, login}