const router =  require("express").Router()

router.get("", (req, res)=>{
    res.status(200).json("Welcome to Home page")
})

module.exports = router