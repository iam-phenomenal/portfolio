const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    link: {type: String, required: true, unique: true},
    image: {type: String, default: "Black Image"},
    tags: {type: Array, required: true}
}, {timestamps: true})

module.exports = mongoose.model("Project", ProjectSchema)