const models = require("../data/models");

const financeModel = models.Finance;

const getFinances = async () => {
  try {
    let finances = await financeModel.findAll();
    // console.log(finances);
    return {
      success: true,
      data: finances,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(finances)));
  }
};

const createFinance = async (finance) => {
  // console.log(finance);
  try {
    let newFinance = await financeModel.create(finance);
    return {
      success: true,
      data: newFinance,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(newFinance)));
  }
};

module.exports = {
  getFinances,
  createFinance,
};
