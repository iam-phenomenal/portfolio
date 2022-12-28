const router =  require("express").Router()
const {getProject} = require("../app/http/requests/projectRequest")

//Create Project
router.get("", getProject)

module.exports = router