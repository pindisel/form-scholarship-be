const financeService = require("../services/finance.service");

const getFinances = async (req, res) => {
  try {
    let finances = await financeService.getFinances();
    res.send(finances);
  } catch (err) {
    res.send(err);
  }
};

const getFinance = async (req, res) => {
  try {
    let finance = await financeService.getFinance(req.params.id);
    res.send(finance);
  } catch (err) {
    res.send(err);
  }
};

const createFinance = async (req, res) => {
  try {
    let newFinance = await financeService.createFinance(req.body);
    res.status(newFinance.status).send(newFinance);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getFinances,
  getFinance,
  createFinance,
};
