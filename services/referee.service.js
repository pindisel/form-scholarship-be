const models = require("../data/models");
const nodemailer = require("nodemailer");
const { port } = require("pg/lib/defaults");
const refereeModel = models.Referee;

const getReferees = async () => {
  try {
    let referees = await refereeModel.findAll();
    // console.log(referees);
    return {
      success: true,
      data: referees,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(referees)));
  }
};

const getReferee = async (id) => {
  try {
    let referee = await refereeModel.findByPk(id);
    return {
      success: true,
      data: referee,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(referee)));
  }
};

const createReferee = async (referee) => {
  // console.log(referee);
  try {
    // let newReferee = await refereeModel.create(referee).catch((err) => {
    //   // console.log(err);
    //   const error = new Error("Error creating referee");
    //   error.status = 400;
    //   throw error;
    // });
    // console.log("createReferee berhasil");
    let transporter = nodemailer.createTransport({
      host: "mail.apl-uiii.web.id",
      port: 587,
      secure: false,
      auth: {
        user: "test@apl-uiii.web.id",
        pass: "inipassword",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    let mailOptions = {
      from: "test@apl-uiii.web.id",
      to: "anathapindika.kian@gmail.com",
      subject: "New Referee",
      text: "tes",
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    return {
      success: true,
      status: 201,
      // data: newReferee,
    };
  } catch (err) {
    console.log("createReferee gagal", err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

module.exports = {
  getReferees,
  getReferee,
  createReferee,
};
