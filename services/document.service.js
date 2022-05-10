const models = require("../data/models");

const documentModel = models.Document;

const getDocuments = async () => {
  try {
    let documents = await documentModel.findAll();
    // console.log(documents);
    return {
      success: true,
      data: documents,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(documents)));
  }
};

const createDocument = async (document) => {
  try {
    let newDocument = await documentModel.create(document).catch((err) => {
      const error = new Error("Error creating document");
      error.status = 400;
      throw err;
    });
    console.log("createDocument berhasil");
    return {
      success: true,
      status: 201,
      data: newDocument,
    };
  } catch (err) {
    console.log("createDocument gagal", err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

module.exports = {
  getDocuments,
  createDocument,
};
