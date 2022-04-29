const models = require("../data/models");

const personalModel = models.Personal;

const getPersonals = async () => {
  try {
    let personals = await personalModel.findAll();
    // console.log(personals);
    return {
      success: true,
      data: personals,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(personals)));
  }
};

const createPersonal = async (personal) => {
  // console.log(personal);
  try {
    let newPersonal = await personalModel.create(personal);
    return {
      success: true,
      data: newPersonal,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(newPersonal)));
  }
};

module.exports = {
  getPersonals,
  createPersonal,
};
