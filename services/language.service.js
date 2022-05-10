const models = require("../data/models");

const languageModel = models.Language;

const getLanguages = async () => {
  try {
    let languages = await languageModel.findAll();
    // console.log(languages);
    return {
      success: true,
      data: languages,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(languages)));
  }
};

const createLanguage = async (language) => {
  // console.log(language);
  try {
    let newLanguage = await languageModel.create(language).catch((err) => {
      const error = new Error("Error creating language");
      error.status = 400;
      throw error;
    });
    console.log("createLanguage berhasil");
    return {
      success: true,
      status: 201,
      data: newLanguage,
    };
  } catch (err) {
    console.log("createLanguage gagal", err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

module.exports = {
  getLanguages,
  createLanguage,
};
