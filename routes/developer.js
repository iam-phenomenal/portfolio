const router = require("express").Router()
const {publicGetUser} = require("../app/http/requests/userRequest")

router.get("", publicGetUser)

module.exports = router;