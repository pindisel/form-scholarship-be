const models = require("../data/models");

const educationModel = models.Education;

const getEducations = async () => {
  try {
    let educations = await educationModel.findAll();
    // console.log(educations);
    return {
      success: true,
      data: educations,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(educations)));
  }
};

const getEducation = async (id) => {
  try {
    let education = await educationModel.findByPk(id);
    return {
      success: true,
      data: education,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(education)));
  }
};

const createEducation = async (education) => {
  // console.log(education);
  try {
    let newEducation = await educationModel.create(education).catch((err) => {
      console.log(err);
      const error = new Error("Error creating education");
      error.status = 400;
      throw error;
    });
    console.log("createEducation berhasil");
    return {
      success: true,
      status: 201,
      data: newEducation,
    };
  } catch (err) {
    console.log("createEducation gagal", err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

module.exports = {
  getEducations,
  getEducation,
  createEducation,
};
