const educationSerice = require("../services/education.service");

const getEducations = async (req, res) => {
  try {
    let educations = await educationSerice.getEducations();
    res.send(educations);
  } catch (err) {
    res.send(err);
  }
};

const createEducation = async (req, res) => {
  try {
    let newEducation = await educationSerice.createEducation(req.body);
    res.send(newEducation);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getEducations,
  createEducation,
};
