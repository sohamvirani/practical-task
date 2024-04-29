const {userSchema} = require("../models");

const getuser = () => {
    return userSchema.find();
};

const adduser = (body) => {
    return userSchema.create(body);
};

module.exports={
    getuser,
    adduser
};