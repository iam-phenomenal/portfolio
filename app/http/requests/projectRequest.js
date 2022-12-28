const Project = require("../../model/Project")


//Create Project 
const createProject = async(req, res)=>{
    const newProject = new Project({
        name: req.body.name,
        author: req.body.author,
        desc: req.body.desc,
        link: req.body.link,
        image: req.body.image,
        tags: req.body.tags,
        likes: 0
    })
    try{
        const saveProject = await newProject.save()
        return res.status(500).json({output: saveProject._doc})
    }catch(err){
        return res.status(500).json({error: err.message})
    }
}

const getProject = async(req, res)=>{
    const p_name = req.query.name
    const author = req.query.author
    if(p_name){
        try{
            const project =await Project.find({name: p_name})
            if(project.length == 0) return res.status(403).json({output: "Project not found"})
            return res.status(200).json({output: project})
        }catch(err){
            return res.status(500).json({error: err.message})
        }
    }else if(author){
        try{
            const project =await Project.find({author: author})
            if(project.length == 0) return res.status(403).json({output: "Project not found"})
            return res.status(200).json({output: project})
        }catch(err){
            return res.status(500).json({error: err.message})
        }
    }
    else{
        try{
            const project =await Project.find()
            if(project.length == 0) return res.status(403).json({output: "No project found"})
            return res.status(200).json({output: project})
        }catch(err){
            return res.status(500).json({error: err.message})
        }
    }
}

const updateProject = async(req, res)=>{
    const projectid = req.params.id
    try{
        const updatedProject =await Project.findByIdAndUpdate(projectid, 
            {$set: req.body}, {new: true})
        return res.status(200).json({output: updatedProject}) 
        
    }catch(err){
        return res.status(500).json({error: err.message})
    }
}

const delProject = async(req, res)=>{
    const projectid =req.params.id
    try{
        await Project.findByIdAndDelete(projectid)
        return res.status(200).json({output: "Project deleted"})
    }catch(err){
        return res.status(500).json({error: err.message})
    }
}

module.exports = {createProject, getProject, updateProject, delProject}