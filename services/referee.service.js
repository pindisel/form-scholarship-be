const models = require("../data/models");
const nodemailer = require("nodemailer");
const { port } = require("pg/lib/defaults");
require("dotenv").config();
const refereeModel = models.Referee;
const personalModel = models.Personal;

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

  // console.log(ref1, ref2);
  try {
    let newReferee = await refereeModel.create(referee).catch((err) => {
      // console.log(err);
      const error = new Error("Error creating referee");
      error.status = 400;
      throw error;
    });
    console.log("createReferee berhasil");
    const personal = await personalModel.findByPk(referee.id_user);
    // console.log(personal.dataValues);
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    let output1 = `
      <p>Dear ${
        referee.title_ref1.charAt(0).toUpperCase() + referee.title_ref1.slice(1)
      }. ${
      referee.l_name_ref1.charAt(0).toUpperCase() + referee.l_name_ref1.slice(1)
    } ${
      referee.f_name_ref1.charAt(0).toUpperCase() + referee.f_name_ref1.slice(1)
    },</p>
      <p>We have recently received an application to Indonesian International Islamic University from ${
        personal.dataValues.title.charAt(0).toUpperCase() +
        personal.dataValues.title.slice(1)
      }. ${
      personal.dataValues.l_name.charAt(0).toUpperCase() +
      personal.dataValues.l_name.slice(1)
    } ${
      personal.dataValues.f_name.charAt(0).toUpperCase() +
      personal.dataValues.f_name.slice(1)
    } who has requested that you provide a reference (letter of reccomendation) in support of their application to UIII.</p>
      <br />
      <p>In order for us to consider this application promptly we would ask that you please click the link below to fill in the reference form.</p>
      <p>Click here <a href="${process.env.EMAIL_URL}?id_user=${
      referee.id_user
    }&id_ref=1">here</a>.</p>
      <p>We look forward to receiving your reference in one week after receiving this notification in order for us to consider ${
        personal.dataValues.title.charAt(0).toUpperCase() +
        personal.dataValues.title.slice(1)
      }. ${
      personal.dataValues.l_name.charAt(0).toUpperCase() +
      personal.dataValues.l_name.slice(1)
    } ${
      personal.dataValues.f_name.charAt(0).toUpperCase() +
      personal.dataValues.f_name.slice(1)
    } for this application.</p>
      <br />
      <p>With Regards,</p>
      <br />
      <br />
      <p>Bahrul Hayat</p>
      <p>Vice Rector for Academic, Human Resource and Student Affairs</p>
    `;

    let output2 = `
    <p>Dear ${
      referee.title_ref2.charAt(0).toUpperCase() + referee.title_ref2.slice(1)
    }. ${
      referee.l_name_ref2.charAt(0).toUpperCase() + referee.l_name_ref2.slice(1)
    } ${
      referee.f_name_ref2.charAt(0).toUpperCase() + referee.f_name_ref2.slice(1)
    },</p>
    <p>We have recently received an application to Indonesian International Islamic University from ${
      personal.dataValues.title.charAt(0).toUpperCase() +
      personal.dataValues.title.slice(1)
    }. ${
      personal.dataValues.l_name.charAt(0).toUpperCase() +
      personal.dataValues.l_name.slice(1)
    } ${
      personal.dataValues.f_name.charAt(0).toUpperCase() +
      personal.dataValues.f_name.slice(1)
    } who has requested that you provide a reference (letter of reccomendation) in support of their application to UIII.</p>
    <br />
    <p>In order for us to consider this application promptly we would ask that you please click the link below to fill in the reference form.</p>
    <p>Click here <a href="${process.env.EMAIL_URL}?id_user=${
      referee.id_user
    }&id_ref=2">here</a>.</p>
    <p>We look forward to receiving your reference in one week after receiving this notification in order for us to consider ${
      personal.dataValues.title.charAt(0).toUpperCase() +
      personal.dataValues.title.slice(1)
    }. ${
      personal.dataValues.l_name.charAt(0).toUpperCase() +
      personal.dataValues.l_name.slice(1)
    } ${
      personal.dataValues.f_name.charAt(0).toUpperCase() +
      personal.dataValues.f_name.slice(1)
    } for this application.</p>
    <br />
    <p>With Regards,</p>
    <br />
    <br />
    <p>Bahrul Hayat</p>
    <p>Vice Rector for Academic, Human Resource and Student Affairs</p>
    `;

    let mailOptions1 = {
      from: `"UIII Admission" <${process.env.EMAIL_USER}>`, // sender address
      to: referee.email_ref1, // list of receivers
      subject: "Confirmation UIII Admission Referee", // Subject line // plain text body
      html: output1, // html body
    };

    let mailOptions2 = {
      from: `"UIII Admission" <${process.env.EMAIL_USER}>`,
      to: referee.email_ref2,
      subject: "Confirmation UIII Admission Referee",
      html: output2,
    };

    transporter.sendMail(mailOptions1, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    transporter.sendMail(mailOptions2, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return {
      success: true,
      status: 201,
      data: newReferee,
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
