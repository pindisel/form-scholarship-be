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
  // console.log(contact);
  try {
    let newContact = await contactModel.create(contact);
    return {
      success: true,
      data: newContact,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(newContact)));
  }
};

module.exports = {
  getContacts,
  createContact,
};
