const router =  require("express").Router()

router.get("", (req, res)=>{
    res.status(200).json("Welcome to Project page")
})

module.exports = router