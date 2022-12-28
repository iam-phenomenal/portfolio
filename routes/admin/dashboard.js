const router = require("express").Router()
const {getUser} = require("../../app/http/requests/userRequest")

router.get("/:id", getUser)

module.exports = router