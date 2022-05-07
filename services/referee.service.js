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
    let newReferee = await refereeModel.create(referee);
    return {
      success: true,
      data: newReferee,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(newReferee)));
  }
};

module.exports = {
  getReferees,
  createReferee,
};
