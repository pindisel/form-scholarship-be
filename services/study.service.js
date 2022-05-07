const models = require("../data/models");

const studyModel = models.Study;

const getStudies = async () => {
  try {
    let studies = await studyModel.findAll();
    // console.log(studies);
    return {
      success: true,
      data: studies,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(studies)));
  }
};

const createStudy = async (study) => {
  // console.log(study);
  try {
    let newStudy = await studyModel.create(study);
    return {
      success: true,
      data: newStudy,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(newStudy)));
  }
};

module.exports = {
  getStudies,
  createStudy,
};
