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
  try {
    let newStudy = await studyModel.create(study).catch((err) => {
      console.log(err);
      const error = new Error("Error creating study");
      error.status = 400;
      throw error;
    });
    console.log("createStudy berhasil");
    return {
      success: true,
      status: 201,
      data: newStudy,
    };
  } catch (err) {
    console.log("createStudy gagal", err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

module.exports = {
  getStudies,
  createStudy,
};
