require("dotenv").config()
const http = require("http")

const app = require("./config/express")
const PORT = process.env.PORT || 4500
const server = http.createServer(app)

server.listen(PORT, ()=>{
    console.log("Server running!")
})