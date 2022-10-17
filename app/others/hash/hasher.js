const bcrypt = require("bcrypt")
require("dotenv").config()

const saltRounds = process.env.SALT_ROUND

const hash = async (password)=>{
    const hashResult = await bcrypt.hash(password, saltRounds)
    return hashResult
}

const validateHash = async (password, hashedPassword)=>{
    const validationResult = await bcrypt.compare(password, hashedPassword)
    return validationResult
}

module.exports = {hash, validateHash}