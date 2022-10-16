const router = require("express").Router()

router.get("", (req, res)=>{
    res.status(200).json("Welcome to About page")
})

module.exports = router