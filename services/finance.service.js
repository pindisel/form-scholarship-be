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
    let newFinance = await financeModel.create(finance).catch((err) => {
      const error = new Error("Error creating finance");
      error.status = 400;
      throw error;
    });
    console.log("createFinance berhasil");
    return {
      success: true,
      status: 201,
      data: newFinance,
    };
  } catch (err) {
    console.log("createFinance gagal", err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

module.exports = {
  getFinances,
  createFinance,
};
