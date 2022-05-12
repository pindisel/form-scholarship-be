const userService = require("../services/user.service");

const getUsers = async (req, res) => {
  try {
    let users = await userService.getUsers();
    res.send(users);
  } catch (err) {
    res.send(err);
  }
};

const createUser = async (req, res) => {
  try {
    let newUser = await userService.createUser(req.body);
    res.send(newUser).status(newUser.status);
  } catch (err) {
    res.send(err);
  }
};

const signIn = async (req, res) => {
  try {
    let user = await userService.signIn(req.body);
    res.send(user).status(user.status);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getUsers,
  createUser,
  signIn,
};
