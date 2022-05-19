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

const getPersonal = async (id) => {
  try {
    let personal = await personalModel.findByPk(id);
    return {
      success: true,
      data: personal,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(personal)));
  }
};

const createPersonal = async (personal) => {
  try {
    let newPersonal = await personalModel.create(personal).catch((err) => {
      // console.log(err);
      const error = new Error("Error creating personal");
      error.status = 400;
      throw error;
    });
    // console.log(newPersonal);
    console.log("createPersonal berhasil");
    return {
      success: true,
      status: 201,
      data: newPersonal,
    };
  } catch (err) {
    console.log("createPersonal gagal", err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

module.exports = {
  getPersonals,
  getPersonal,
  createPersonal,
};
