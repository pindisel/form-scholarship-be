const studyService = require("../services/study.service");

const getStudies = async (req, res) => {
  try {
    let studies = await studyService.getstudies();
    res.send(studies);
  } catch (err) {
    res.send(err);
  }
};

const createStudy = async (req, res) => {
  try {
    let newStudy = await studyService.createFinance(req.body);
    res.send(newStudy);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getStudies,
  createStudy,
};
