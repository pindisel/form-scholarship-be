const languageService = require("../services/language.service");

const getLanguages = async (req, res) => {
  try {
    let languages = await languageService.getLanguages();
    res.send(languages);
  } catch (err) {
    res.send(err);
  }
};

const createLanguage = async (req, res) => {
  try {
    let newLanguage = await languageService.createLanguage(req.body);
    res.send(newLanguage).status(newLanguage.status);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getLanguages,
  createLanguage,
};
