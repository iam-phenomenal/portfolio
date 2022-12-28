const { body, param } = require("express-validator")
const User = require("../../model/User")

const createValidator = [
    body("name").notEmpty().withMessage("Name is required!"),
    body("author").notEmpty().withMessage("Author is required!"),
    body("desc").notEmpty().withMessage("Project description is required!")
    .isLength({min: 15, max: 100}).withMessage("Minimum: 15 Maximum: 100")
    .isString().withMessage("Description should be a string"),
    body("link").notEmpty().withMessage("Project link is required")
    .isURL().withMessage("Please enter a valid url"),
    body("tags").isArray().withMessage("Tag should be an array of atleast 1 element"),
]

const updateValidator = [
    body("name").isString().withMessage("Name is required!"),
    body("desc").notEmpty().withMessage("Project description is required!")
    .isLength({min: 15, max: 100}),
    body("link").isURL().withMessage("Please enter a valid url")
]

module.exports = {createValidator, updateValidator}
