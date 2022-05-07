const express = require("express"),
  router = express.Router(),
  contactController = require("../controllers/contact.controller"),
  authorization = require("../middlewares/authorization"),
  validators = require("../validators/userValidators");

router.get("/", contactController.getContacts);

router.post("/", contactController.createContact);

module.exports = router;
