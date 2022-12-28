const mongoose = require("mongoose")

const UserSchema =  new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    bio: {type: String, max: 100, default: ""},
    headline: {type:String, max: 50, default: ""},
    password: {type: String, required: true},
    developer: {type:Boolean, default: false},
    admin: {type: Boolean, default: false}
}, {timestamps: true})

module.exports =mongoose.model("User", UserSchema)