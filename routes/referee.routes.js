const express = require("express"),
  router = express.Router(),
  refereeController = require("../controllers/referee.controller"),
  authorization = require("../middlewares/authorization"),
  validators = require("../validators/userValidators");

router.get("/", refereeController.getReferees);

router.post("/", refereeController.createReferee);

module.exports = router;
