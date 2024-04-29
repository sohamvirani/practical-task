const express = require("express");
// const validate = require("../middlewares/validate");
const {postcontroller} = require("../controllers");
// const{postvalidation} = require("../validations");
const route = express.Router();

route.post("/add",postcontroller.addpost);

module.exports = route;