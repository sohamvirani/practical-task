const {postServices} = require("../services");

const post = require("../models/post.model");

const addpost = async (req, res) => {
    try {
      const body = req.body;
      console.log(body);
  const post = await postServices.addpost(body)

      res.status(201).json({
        message: "post Created success",
        data: post,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };

  module.exports = {addpost};