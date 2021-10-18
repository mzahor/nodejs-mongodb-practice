const User = require("../models/User");
const UserService = require("../services/User");

class UserController {
  async findUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.findUser(id);

      res.status(200).json({
        status: "success",
        user,
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find();

      res.status(200).json({
        status: "success",
        users,
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: "Failed getting users",
      });
    }
  }

  async createUser(req, res) {
    try {
      const { username, email, age, hobbies } = req.body;
      const data = new User({ username, email, age, hobbies });

      const newUser = await data.save();

      res.status(200).json({
        status: "success",
        user: newUser,
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  }
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await UserService.findUser(id);

      await User.findByIdAndRemove(id);

      res.status(200).json({
        status: "success",
        message: "User was deleted!",
        user,
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  }
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      await UserService.findUser(id);

      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          $set: data,
        },
        { new: true }
      );

      res.status(200).json({
        status: "success",
        message: "User was updated!",
        user: updatedUser,
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: error.message,
      });
    }
  }
}

module.exports = new UserController();
