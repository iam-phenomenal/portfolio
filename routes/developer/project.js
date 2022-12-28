const router = require("express").Router()
const {createProject, getProject, updateProject, delProject} = require("../../app/http/requests/projectRequest")
const {signToken, verifyToken, tokenAuthentication, devAuthentication, adminAuthentication} =
    require("../../app/others/tokenization")

//Create Project
router.post("/:userid/projects", devAuthentication, createProject)

//Update Project
router.put("/:userid/projects/:id", devAuthentication, updateProject)

//Get All Project
router.get("/:userid/projects", getProject)

//Delete Project
router.delete("/:userid/projects/:id", devAuthentication, delProject)

module.exports = router