const express = require("express"),
  router = express.Router(),
  documentController = require("../controllers/document.controller"),
  authorization = require("../middlewares/authorization"),
  validators = require("../validators/userValidators");

router.get("/", documentController.getDocuments);

router.post("/", documentController.createDocument);

module.exports = router;
