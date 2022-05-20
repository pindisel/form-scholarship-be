const express = require("express"),
  router = express.Router(),
  refereeformController = require("../controllers/refereeform.controller"),
  authorization = require("../middlewares/authorization"),
  validators = require("../validators/userValidators");

router.get("/1", refereeformController.getRefs1);

router.get("/1/:id", refereeformController.getRef1);

router.post("/1", refereeformController.createRef1);

router.get("/2", refereeformController.getRefs2);

router.get("/2/:id", refereeformController.getRef2);

router.post("/2", refereeformController.createRef2);

module.exports = router;
