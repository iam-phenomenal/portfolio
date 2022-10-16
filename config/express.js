const { urlencoded } = require("express")
const express = require("express")

//Public routes importation
const indexRouter = require("../routes/index")
const contactRouter = require("../routes/contact")
const aboutRouter = require("../routes/about")
const projectRouter = require("../routes/project")

//Admin routes importation
const authRouter = require("../routes/admin/auth")
const dashRouter = require("../routes/admin/dashboard")
const adminProjectRouter = require("../routes/admin/project")
const userRouter = require("../routes/admin/user")

const app = express()

app.use(express.json())
app.use(urlencoded({extended: true}))

//Public Routes
app.use("/", indexRouter)
app.use("/contact", contactRouter)
app.use("/about", aboutRouter)
app.use("/project", projectRouter)

//Admin Routes
app.use("/auth", authRouter)
app.use("/admin", dashRouter)
app.use("/admin/project", adminProjectRouter)
app.use("/admin/user", userRouter)

module.exports = app