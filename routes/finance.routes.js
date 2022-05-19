const express = require("express"),
  router = express.Router(),
  financeController = require("../controllers/finance.controller"),
  authorization = require("../middlewares/authorization"),
  validators = require("../validators/userValidators");

router.get("/", financeController.getFinances);

router.get("/:id", financeController.getFinance);

router.post("/", financeController.createFinance);

module.exports = router;
