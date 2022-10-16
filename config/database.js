const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.DATABASE_URI)
const db = mongoose.connection

module.exports = db