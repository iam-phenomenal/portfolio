const router = require("express").Router()
const {getAllUser} = require("../../app/http/requests/userRequest")

router.get("", getAllUser)

module.exports = router