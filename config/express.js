const { urlencoded } = require("express")
const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const morgan = require("morgan")
const db = require("./database")

//Public routes importation
const indexRouter = require("../routes/index")
const contactRouter = require("../routes/contact")
const aboutRouter = require("../routes/about")
const projectRouter = require("../routes/project")
const devRouter = require("../routes/developer")

//Developers routes importation
const auth = require("../routes/auth")
const dashDev = require("../routes/developer/dashboard")
const devProject = require("../routes/developer/project")
const userDev = require("../routes/developer/user")

//Admin routes importation
const authAdmin = require("../routes/admin/adminAuth")
const dashAdmin = require("../routes/admin/dashboard")
const userAdmin = require("../routes/admin/user")

const app = express()
db.on("error", (error)=> console.log(error))
db.once("open", ()=> console.log("Connected to database"))

app.use(express.json())
app.use(urlencoded({extended: true}))
app.use(morgan("common"))
app.use(cors())
app.use(helmet())

//Public Routes
app.use("/", indexRouter)
app.use("/contact", contactRouter)
app.use("/about", aboutRouter)
app.use("/projects", projectRouter)
app.use("/developers", devRouter)

//Developer Routes
app.use("/auth", auth)
app.use("/dev", dashDev)
app.use("/dev", devProject)
app.use("/dev", userDev)

//Admin Routes
app.use("/admin.auth", authAdmin)
app.use("/admin", dashAdmin)
app.use("/admin/:userid/", userAdmin)

app.use((req, res, next)=>{
    const error = new Error("Not found")
    error.status = 404
    next(error)
})

app.use((error, req, res, next)=>{
    res.status(error.status || 505).json({error: 
        {message: error.message}
    })
})

module.exports = app