const express = require("express"),
  router = express.Router(),
  jobController = require("../controllers/job.controller"),
  authorization = require("../middlewares/authorization"),
  validators = require("../validators/userValidators");

router.get("/", jobController.getJobs);

router.get("/:id", jobController.getJob);

router.post("/", jobController.createJob);

module.exports = router;
