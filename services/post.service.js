const {postSchema} = require("../models");

const getpost = () => {
    return postSchema.find();
};

const addpost = (body) => {
    return postSchema.create(body);
};

module.exports={
    getpost,
    addpost
};