const personalServices = require("../services/personal.service");

const getPersonals = async (req, res) => {
  try {
    let personals = await personalServices.getPersonals();
    res.send(personals);
  } catch (err) {
    res.send(err);
  }
};

const getPersonal = async (req, res) => {
  try {
    let personal = await personalServices.getPersonal(req.params.id);
    res.send(personal);
  } catch (err) {
    res.send(err);
  }
};

const createPersonal = async (req, res) => {
  try {
    // console.log(req.body);
    let newPersonal = await personalServices.createPersonal(req.body);
    res.status(newPersonal.status).send(newPersonal);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getPersonals,
  createPersonal,
  getPersonal,
};
