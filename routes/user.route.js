const express = require("express");
// const validate = require("../middlewares/validate");
const {usercontroller} = require("../controllers");
// const{uservalidation} = require("../validations");
const route = express.Router();

route.post("/login",usercontroller.addUser);

module.exports = route;