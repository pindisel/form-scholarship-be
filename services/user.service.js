const models = require("../data/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = models.User;

const getUsers = async () => {
  try {
    let users = await userModel.findAll();
    // console.log(users);
    return {
      success: true,
      data: users,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(users)));
  }
};

const createUser = async (user) => {
  // console.log(user);
  try {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);

    let newUser = await userModel.create(user).catch((err) => {
      const error = new Error("Error creating user");
      error.status = 400;
      throw error;
    });
    console.log("createUser berhasil");
    return {
      success: true,
      status: 201,
      data: newUser,
    };
  } catch (err) {
    console.log("createUser gagal", err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

const signIn = async (user) => {
  try {
    let foundUser = await userModel
      .findOne({
        where: {
          email: user.email,
        },
      })
      .catch((err) => {
        const error = new Error("Email not found");
        error.status = 400;
        throw error;
      });
    if (foundUser) {
      const isPasswordValid = await bcrypt
        .compare(user.password, foundUser.password)
        .catch((err) => {
          const error = new Error("Error comparing passwords");
          error.status = 400;
          throw error;
        });
      if (isPasswordValid) {
        const token = jwt.sign(JSON.stringify(foundUser), "form-app-secret");
        return {
          success: true,
          status: 200,
          data: {
            token,
            user: foundUser,
          },
        };
      } else {
        const error = new Error("Password is not valid");
        error.status = 400;
        throw error;
      }
    } else {
      const error = new Error("User not found");
      error.status = 400;
      throw error;
    }
  } catch (err) {
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

module.exports = {
  getUsers,
  createUser,
  signIn,
};
