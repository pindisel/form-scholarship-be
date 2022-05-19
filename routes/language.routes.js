const express = require("express"),
  router = express.Router(),
  languageController = require("../controllers/language.controller"),
  authorization = require("../middlewares/authorization"),
  validators = require("../validators/userValidators");

router.get("/", languageController.getLanguages);

router.get("/:id", languageController.getLanguage);

router.post("/", languageController.createLanguage);

module.exports = router;
