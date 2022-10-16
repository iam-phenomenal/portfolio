const router = require("express").Router()

//Login
router.post("/login", (req, res)=>{
    res.status(200).json("Welcome to Login page")
})

//Registration
router.post("/register", (req, res)=>{
    res.status(200).json("Welcome to Registration page")
})

module.exports = router