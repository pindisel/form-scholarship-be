const express = require("express"),
  router = express.Router(),
  userController = require("../controllers/user.controller"),
  authorization = require("../middlewares/authorization"),
  validators = require("../validators/userValidators");

router.get("/", userController.getUsers);

router.post("/signup", userController.createUser);

router.post("/signin", userController.signIn);

module.exports = router;
