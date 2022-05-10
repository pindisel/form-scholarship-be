const models = require("../data/models");

const refereeModel = models.Referee;

const getReferees = async () => {
  try {
    let referees = await refereeModel.findAll();
    // console.log(referees);
    return {
      success: true,
      data: referees,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(referees)));
  }
};

const createReferee = async (referee) => {
  // console.log(referee);
  try {
    let newReferee = await refereeModel.create(referee).catch((err) => {
      const error = new Error("Error creating referee");
      error.status = 400;
      throw error;
    });
    console.log("createReferee berhasil");
    return {
      success: true,
      status: 201,
      data: newReferee,
    };
  } catch (err) {
    console.log("createReferee gagal", err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

module.exports = {
  getReferees,
  createReferee,
};
