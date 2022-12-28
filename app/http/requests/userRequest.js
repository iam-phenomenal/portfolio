const User = require("../../model/User")
const {hashPass} = require("../../others/hash/hasher")

const updateUser = async(req, res)=>{
    const userid = req.params.userid
    try{
        if(req.body.password){
            req.body.password = await hashPass(req.body.password)
        }
        const updatedUser = await User.findByIdAndUpdate(userid, 
            {$set: req.body}, {new: true})
        return res.status(200).json({output: updatedUser})

    }catch(err){
        res.status(500).json({error: err.message})
    }
}

const delUser = async(req, res)=>{
    const userid = req.params.userid
    try{
        await User.findByIdAndDelete(userid, (err, success)=>{
            if(err) return res.status(403).json({error: err})
            return res.status(200).json({output: "User deleted"})
        })
    }catch(err){
        return res.status(500).json({error: err.message})
    }
}

const publicGetUser = async(req, res)=>{
    const username = req.query.name
    const newUsers = req.query.new
    let users
    try{
        if(username){
            users = await User.findOne({username: username, admin: false}).select("username")
        }else if(newUsers){
            users = await User.find({admin: false}).select("username headline developer")
        }else{
            users = await User.find({admin: false}).select("username")
        }
        if(users.length == 0){
            return res.status(200).json({
                message: "No user found",
                requests: {

                }
            })
        }else{
            return res.status(200).json({
                output: {
                    
                }
            })
        }
    }catch(err){
        return res.status(500).json({error: err.message})
    }
}

//
const getUser = async(req, res)=>{
    const userid = req.params.userid
    try{
        const user = await User.findById(userid)
        return res.status(200).json({output: user})
    }catch(err){
        return res.status(500).json({error: err.message})
    }
}

const getAllUser = async(req, res)=>{
    const name = req.query.name
    const newUsers = req.query.new
    try{
        if(name){
            const user = await User.find({username: name})
            .select("username headline")
            if(user.length == 0) return res.status(200).json({output: "Username not found"})
            return res.status(200).json({output: user})
        }else if(newUsers){
            const user = await User.find()
        }else{
            const users = await User.find()
            if(users.length == 0) return res.status(200).json({output: "No user found"})
            return res.status(200).json({output: users})
        }
    }catch(err){
        return res.status(500).json({error: err.message})
    }
}

module.exports = {updateUser, delUser, publicGetUser, getUser, getAllUser}

/**
 * TODO
 * Add pagination and filters{query}
 * A
 */