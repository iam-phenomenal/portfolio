const router = require("express").Router()

router.get("", (req, res)=>{
    res.json("Welcome to About page")
})

module.exports = router