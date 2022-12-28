const router = require("express").Router()

const {updateUser, delUser} = 
    require("../../app/http/requests/userRequest")
const { devAuthentication } = require("../../app/others/tokenization")

//Update User
router.put("/:userid", devAuthentication, updateUser)

//Delete User
router.delete("/:userid", devAuthentication, delUser)

module.exports = router