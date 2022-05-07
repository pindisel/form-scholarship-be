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

const createEducation = async (education) => {
  // console.log(education);
  try {
    let newEducation = await educationModel.create(education);
    return {
      success: true,
      data: newEducation,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(newEducation)));
  }
};

module.exports = {
  getEducations,
  createEducation,
};
