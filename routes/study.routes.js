const express = require("express"),
  router = express.Router(),
  studyController = require("../controllers/study.controller"),
  authorization = require("../middlewares/authorization"),
  validators = require("../validators/userValidators");

router.get("/", studyController.getStudies);

router.get("/:id", studyController.getStudy);

router.post("/", studyController.createStudy);

module.exports = router;
