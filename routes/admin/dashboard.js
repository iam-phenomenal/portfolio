const router = require("express").Router()

router.get("", (req, res)=>{
    res.status(200).json("Welcome to admin dashboard")
})

module.exports = router