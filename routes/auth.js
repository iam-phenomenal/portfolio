const router = require("express").Router()
const {registerValidator, loginValidator} = require("../app/others/validators/authValidator")

const {register, login} = require("../app/http/requests/authRequest")

//Registration
router.post("/register", registerValidator, register)

//Login
router.post("/login", loginValidator, login)

module.exports = router