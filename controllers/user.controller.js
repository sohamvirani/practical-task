const {userServices} = require("../services");

const user = require("../models/user.model");

const addUser = async (req, res) => {
    try {
      const body = req.body;
      console.log(body);
  const user = await userServices.adduser(body)

      res.status(201).json({
        message: "user Created success",
        data: user,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  };

  module.exports = {addUser};