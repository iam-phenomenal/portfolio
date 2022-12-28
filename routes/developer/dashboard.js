const router = require("express").Router()

const {getUser} = require("../../app/http/requests/userRequest")
const {devAuthentication} = require("../../app/others/tokenization")

router.get("/:userid",devAuthentication, getUser)

module.exports = router