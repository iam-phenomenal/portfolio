const router =  require("express").Router()

router.get("", (req, res)=>{
    res.send("Welcome to Project page")
})

module.exports = router