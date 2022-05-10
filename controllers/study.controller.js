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
    let newStudy = await studyService.createStudy(req.body);
    res.send(newStudy).status(newStudy.status);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getStudies,
  createStudy,
};
