const express = require("express"),
  router = express.Router(),
  userController = require("../controllers/user.controller"),
  authorization = require("../middlewares/authorization"),
  validators = require("../validators/userValidators");

router.get("/", userController.getUsers);

router.get("/:id", userController.getUser);

router.post("/signup", userController.createUser);

router.post("/signin", userController.signIn);

router.put("/verify/:token", userController.verifyUser);

module.exports = router;
