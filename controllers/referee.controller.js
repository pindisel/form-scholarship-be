const refereeService = require("../services/referee.service");

const getReferees = async (req, res) => {
  try {
    let referees = await refereeService.getReferees();
    res.send(referees);
  } catch (err) {
    res.send(err);
  }
};

const getReferee = async (req, res) => {
  try {
    let referee = await refereeService.getReferee(req.params.id);
    res.send(referee);
  } catch (err) {
    res.send(err);
  }
};

const createReferee = async (req, res) => {
  try {
    let newReferee = await refereeService.createReferee(req.body);
    res.status(newReferee.status).send(newReferee);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getReferees,
  createReferee,
  getReferee,
};
