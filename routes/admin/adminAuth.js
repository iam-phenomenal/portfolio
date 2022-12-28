const router = require("express").Router()
const {register, login} = require("../../app/http/requests/authRequest")

//Login
router.post("/login", login)
//Register
router.post("/register", register)

module.exports = router