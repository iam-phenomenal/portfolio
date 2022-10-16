const router = require("express").Router()

//Create Project
router.post("", (req, res)=>{
    res.status(200).json("Create new project")
})

//Update Project
router.post("/:id", (req, res)=>{
    let project_key  = req.params.id
    res.status(200).json(`Update project ${project_key} info`)
})

//Get Indie Project
router.get("/:id", (req, res)=>{
    let project_key  = req.params.id
    res.status(200).json(`Project ${project_key} info`)
})

//Get All Project
router.get("", (req, res)=>{
    res.status(200).json("All Projects")
})

//Delete Project
router.delete("/:id", (req, res)=>{
    let project_key  = req.params.id
    res.status(200).json(`Project ${project_key} deleted`)
})

module.exports = router