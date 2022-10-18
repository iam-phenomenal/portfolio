const bcrypt = require("bcrypt")
require("dotenv").config()

const saltRounds = 10

const hashPass = async (password)=>{
    const hashResult = await bcrypt.hash(password.toString(), saltRounds);
    return hashResult
}

const validateHash = async (password, hashedPassword)=>{
    const validationResult = await bcrypt.compare(password.toString(), hashedPassword)
    return validationResult
}

module.exports = {hashPass, validateHash}