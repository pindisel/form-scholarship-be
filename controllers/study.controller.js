const studyService = require("../services/study.service");

const getStudies = async (req, res) => {
  try {
    let studies = await studyService.getStudies();
    res.send(studies);
  } catch (err) {
    res.send(err);
  }
};

const getStudy = async (req, res) => {
  try {
    let study = await studyService.getStudy(req.params.id);
    res.send(study);
  } catch (err) {
    res.send(err);
  }
};

const createStudy = async (req, res) => {
  try {
    let newStudy = await studyService.createStudy(req.body);
    res.status(newStudy.status).send(newStudy);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getStudies,
  getStudy,
  createStudy,
};
