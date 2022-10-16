const router =  require("express").Router()

router.get("", (req, res)=>{
    res.send("Welcome to Contact page")
})

module.exports = router