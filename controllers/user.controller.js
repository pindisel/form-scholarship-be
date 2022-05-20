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
    res.status(newUser.status).send(newUser);
  } catch (err) {
    res.send(err);
  }
};

const signIn = async (req, res) => {
  try {
    let user = await userService.signIn(req.body);
    res.status(user.status).send(user);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getUsers,
  createUser,
  signIn,
};
