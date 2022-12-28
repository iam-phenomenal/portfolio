const router = require("express").Router()

router.get("", (req, res)=>{
    res.status(200).json({
        message: "Know more about us",
        requests: [
            {
                name: "Contact",
                type: "GET",
                desc: "A guide to contact the admin",
                url: "http://localhost:4500/contact"
            },{
                name: "Developers",
                type: "GET",
                desc: "View platform's developers",
                url: "http://localhost:4500/developers"
            },{
                name: "Projects",
                type: "GET",
                desc: "View projects",
                url: "http://localhost:4500/projects"
            },{
                name: "Homw",
                type: "GET",
                desc: "Portfolio's landing page",
                url: "http://localhost:4500/about"
            },{
                name: "Authentication",
                type: "GET",
                desc: "Authentication's page",
                url: "http://localhost:4500/auth"
            },
        ]
    })})

module.exports = router