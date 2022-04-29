const express = require("express"),
  router = express.Router(),
  personalController = require("../controllers/personal.controller"),
  authorization = require("../middlewares/authorization"),
  validators = require("../validators/userValidators");

router.get("/", personalController.getPersonals);

router.post("/", personalController.createPersonal);

module.exports = router;
