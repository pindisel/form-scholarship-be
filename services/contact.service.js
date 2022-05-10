const models = require("../data/models");

const contactModel = models.Contact;

const getContacts = async () => {
  try {
    let contacts = await contactModel.findAll();
    // console.log(contacts);
    return {
      success: true,
      data: contacts,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(contacts)));
  }
};

const createContact = async (contact) => {
  try {
    let newContact = await contactModel.create(contact).catch((err) => {
      const error = new Error("Error creating contact");
      error.status = 400;
      throw error;
    });
    console.log("createContact berhasil");
    return {
      success: true,
      status: 201,
      data: newContact,
    };
  } catch (err) {
    console.log("createContact gagal", err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

module.exports = {
  getContacts,
  createContact,
};
