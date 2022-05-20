const models = require("../data/models");

const ref1Model = models.Referee1;
const ref2Model = models.Referee2;

const getRefs1 = async () => {
  try {
    let ref1 = await ref1Model.findAll();
    // console.log(ref1);
    return {
      success: true,
      data: ref1,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(ref1)));
  }
};

const getRef1 = async (id) => {
  try {
    let ref = await ref1Model.findByPk(id);
    return {
      success: true,
      data: ref,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(ref)));
  }
};

const createRef1 = async (ref1) => {
  // console.log(ref1);
  try {
    let newRef1 = await ref1Model.create(ref1).catch((err) => {
      const error = new Error("Error creating ref1");
      error.status = 400;
      throw error;
    });
    console.log("createRef1 berhasil");
    return {
      success: true,
      status: 201,
      data: newRef1,
    };
  } catch (err) {
    console.log("createRef1 gagal", err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

const getRefs2 = async () => {
  try {
    let ref2 = await ref2Model.findAll();
    // console.log(ref2);
    return {
      success: true,
      data: ref2,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(ref2)));
  }
};

const getRef2 = async (id) => {
  try {
    let ref = await ref2Model.findByPk(id);
    return {
      success: true,
      data: ref,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(ref)));
  }
};

const createRef2 = async (ref2) => {
  // console.log(ref2);
  try {
    let newRef2 = await ref2Model.create(ref2).catch((err) => {
      const error = new Error("Error creating ref2");
      error.status = 400;
      throw error;
    });
    console.log("createRef2 berhasil");
    return {
      success: true,
      status: 201,
      data: newRef2,
    };
  } catch (err) {
    console.log("createRef2 gagal", err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
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
