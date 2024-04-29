const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title :{
        type:String,
        require:true,
    },
    body:{
        type:String,
        require:true,
    },
    createdBy:{
        type:String,
        require:true,

    },
    active:{
        type:String,
        require:true,
    },
    location:{
        type:String,
        require:true,

    },

});
const post = mongoose.model("postSchema", postSchema);
module.exports = post;