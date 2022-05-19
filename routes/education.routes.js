const express = require("express"),
  router = express.Router(),
  educationController = require("../controllers/education.controller"),
  authorization = require("../middlewares/authorization"),
  validators = require("../validators/userValidators");

router.get("/", educationController.getEducations);

router.get("/:id", educationController.getEducation);

router.post("/", educationController.createEducation);

module.exports = router;
