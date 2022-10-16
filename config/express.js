const { urlencoded } = require("express")
const express = require("express")

const indexRouter = require("../routes/index")
const contactRouter = require("../routes/contact")
const aboutRouter = require("../routes/about")
const projectRouter = require("../routes/project")

const app = express()

app.use(express.json())
app.use(urlencoded({extended: true}))

app.use("/", indexRouter)
app.use("/contact", contactRouter)
app.use("/about", aboutRouter)
app.use("/project", projectRouter)

module.exports = app