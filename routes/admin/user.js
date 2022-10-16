const router = require("express").Router()

//Update User
router.post("/:id", (req, res)=>{
    let user_key  = req.params.id
    res.status(200).json(`Update user ${user_key} info`)
})

//Get Indie user
router.get("/:id", (req, res)=>{
    let user_key  = req.params.id
    res.status(200).json(`user ${user_key} info`)
})

//Get All User
router.get("", (req, res)=>{
    res.status(200).json("All users")
})

//Delete User
router.delete("/:id", (req, res)=>{
    let user_key  = req.params.id
    res.status(200).json(`user ${user_key} deleted`)
})

module.exports = router