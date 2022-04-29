const personalServices = require("../services/personal.service");

const getPersonals = async (req, res) => {
  try {
    let personals = await personalServices.getPersonals();
    res.send(personals);
  } catch (err) {
    res.send(err);
  }
};

const createPersonal = async (req, res) => {
  try {
    let newPersonal = await personalServices.createPersonal(req.body);
    res.send(newPersonal);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getPersonals,
  createPersonal,
};
