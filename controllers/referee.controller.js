const refereeService = require("../services/referee.service");

const getReferees = async (req, res) => {
  try {
    let referees = await refereeService.getReferees();
    res.send(referees);
  } catch (err) {
    res.send(err);
  }
};

const createReferee = async (req, res) => {
  try {
    let newReferee = await refereeService.createReferee(req.body);
    res.send(newReferee).status(newReferee.status);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getReferees,
  createReferee,
};
