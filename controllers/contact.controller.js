const contactServices = require("../services/contact.service");

const getContacts = async (req, res) => {
  try {
    let contacts = await contactServices.getContacts();
    res.send(contacts);
  } catch (err) {
    res.send(err);
  }
};

const getContact = async (req, res) => {
  try {
    let contact = await contactServices.getContact(req.params.id);
    res.send(contact);
  } catch (err) {
    res.send(err);
  }
};

const createContact = async (req, res) => {
  try {
    let newContact = await contactServices.createContact(req.body);
    res.send(newContact).status(newContact.status);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getContacts,
  getContact,
  createContact,
};
