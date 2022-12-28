const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    desc: {type: String, required: true},
    link: {type: String, required: true, unique: true},
    image: {type: String, default: "Black Image"},
    tags: {type: Array, required: true},
    likes: {type: Array, default: []}
}, {timestamps: true})

module.exports = mongoose.model("Project", ProjectSchema)