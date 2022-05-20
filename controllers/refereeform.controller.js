const refereeformService = require("../services/refereeform.service");

const getRefs1 = async (req, res) => {
  try {
    let ref1 = await refereeformService.getRefs1();
    res.send(ref1);
  } catch (err) {
    res.send(err);
  }
};

const getRef1 = async (req, res) => {
  try {
    let ref = await refereeformService.getRef1(req.params.id);
    res.send(ref);
  } catch (err) {
    res.send(err);
  }
};

const createRef1 = async (req, res) => {
  try {
    let newRef1 = await refereeformService.createRef1(req.body);
    res.status(newRef1.status).send(newRef1);
  } catch (err) {
    res.send(err);
  }
};

const getRefs2 = async (req, res) => {
  try {
    let ref2 = await refereeformService.getRefs2();
    res.send(ref2);
  } catch (err) {
    res.send(err);
  }
};

const getRef2 = async (req, res) => {
  try {
    let ref = await refereeformService.getRef2(req.params.id);
    res.send(ref);
  } catch (err) {
    res.send(err);
  }
};

const createRef2 = async (req, res) => {
  try {
    let newRef2 = await refereeformService.createRef2(req.body);
    res.status(newRef2.status).send(newRef2);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getRefs1,
  getRef1,
  createRef1,
  getRefs2,
  getRef2,
  createRef2,
};
