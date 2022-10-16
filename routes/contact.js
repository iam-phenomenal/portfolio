const router =  require("express").Router()

router.get("", (req, res)=>{
    res.status(200).json("Welcome to Contact page")
})

module.exports = router