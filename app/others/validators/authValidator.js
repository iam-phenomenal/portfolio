const {body} = require("express-validator")
const User = require("../../model/User")

const registerValidator = [
    body("username").not().isEmpty().withMessage("Username is requiredQ")
    .isString().withMessage("Username should be of type String!")
    .isLength({ min: 5, max: 15}),

    body("email").not().isEmpty().withMessage("Email is required!")
    .isEmail().withMessage("Please enter a valid email!"),

    body("bio").isString().withMessage("Bio should be of type String!")
    .isLength({max: 100}).withMessage("Bio should not exceed 100 characters"),

    body("headline").isString().withMessage("Bio should be of type String!")
    .isLength({max: 100}).withMessage("Bio should not exceed 100 characters"),

    body("password").not().isEmpty().withMessage("Password is required!")
    .isString().withMessage("Password should be a String")
    .isAlphanumeric().withMessage("Password should be alphanumeric")
    .isLength({min: 8, max: 15}).withMessage("Minimum: 8 Maximum: 15"),

    body("developer").isBoolean().withMessage("Developer should be a boolean"),
    body("admin").isBoolean().withMessage("Admin should be a boolean")
]


const loginValidator = [
    body("email").not().isEmpty().withMessage("Email is required!")
    .isEmail().withMessage("Please enter a valid email!"),

    body("password").not().isEmpty().withMessage("Password is required!")
    .isString().withMessage("Password should be a String")
    .isAlphanumeric().withMessage("Password should be alphanumeric")
    .isLength({min: 8, max: 15}).withMessage("Minimum: 8 Maximum: 15")
]

module.exports = {registerValidator, loginValidator}