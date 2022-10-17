const router = require("express").Router()
const {register, login} = require("../../app/http/requests/authRequest")
//Login
router.post("/login", login)

//Registration
router.post("/register", register)

module.exports = router