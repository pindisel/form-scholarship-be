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
    let newLanguage = await languageModel.create(language);
    return {
      success: true,
      data: newLanguage,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(newLanguage)));
  }
};

module.exports = {
  getLanguages,
  createLanguage,
};
