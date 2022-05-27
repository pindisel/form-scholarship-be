const models = require("../data/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const res = require("express/lib/response");
require("dotenv").config();

const userModel = models.User;

async function sendEmail(user) {
  // console.log(user);
  const token = jwt.sign(
    {
      id_user: user.id_user,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
  // console.log(token);

  await userModel.update(
    {
      token: token,
    },
    {
      where: {
        id_user: user.id_user,
      },
    }
  );

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

  let output = `
    <p>
      Thank you for registering your online account for the UIII Admissions
      2022-2023.
    </p>
    <p>Please pay attention to the following points:</p>
    <ol>
      <li>
        You will be asked to fill out your personal information. Make sure that
        your data is valid and complete
      </li>
      <li>
        We highly advise your referees should be someone who knows you well and
        has spent time with them in academic or professional settings. They
        should be knowledgeable about your academic or work experiences; and
        qualifications, including your skills, strengths, goals, and
        accomplishments. Please provide your referee's active email address
        where we can send the link for them to fill their recommendation of you.
      </li>
      <li>
        After all of your required documents are ready, upload them to the
        system. Make sure that the uploaded documents have been submitted
        successfully before proceeding to the next step.
      </li>
      <li>
        After submitting the documents, pay the application fee with the
        following amount and procedure:
      </li>
      <ol type="a">
        <li>Application Cost</li>
        <ul>
          <li>Indonesian Residents: IDR 750,000</li>
          <li>Non-Indonesian Residents: USD 50</li>
        </ul>
        <li>Transfer the fee to:</li>
        <ul>
          <li>Bank Account Number: 1570025252009</li>
          <li>Bank Account Name: Universitas Islam Internasional Indonesia</li>
          <li>Bank Name: Bank Mandiri</li>
          <li>Swift Code: BMRIIDJA</li>
        </ul>
        Before you make the payment, please add "UIII APPLICATION FEE" in the
        description of the money transfer
        <li>
          Kindly note that you must upload your Proof of Payment in its intended
          document submission field.
        </li>
      </ol>
      <li>
        To complete your application, select "Declaration". Your application
        will be automatically recorded in our system.
      </li>
    </ol>
    <p>Click the link below to verify your account within 24 hours.</p>
    <a href="${process.env.EMAIL_VERIF_URL}?token=${token}">
    Click here.
    </a>
    <p>Thank you.</p>
    <br />
    <p>Best regards,</p>
    <p>Admission Committee</p>
    <a href="https://uiii.ac.id/admissions"> https://uiii.ac.id/admissions </a>
    <br />
    <p>This is an automated message. Please do not reply to this email.</p>
  `;

  let mailOptions = {
    from: `"UIII Admission" <${process.env.EMAIL_USER}>`,
    to: `${user.email}`,
    subject: "Account Registration for UIII Admissions 2022-2023",
    html: output,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

const getUsers = async () => {
  try {
    let users = await userModel.findAll();
    // console.log(users);
    return {
      success: true,
      data: users,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(users)));
  }
};

const getUser = async (id) => {
  try {
    let user = await userModel.findByPk(id);
    return {
      success: true,
      data: user,
    };
  } catch (err) {
    throw new Error(JSON.parse(JSON.stringify(user)));
  }
};

const verifyUser = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await userModel.update(
      {
        confirmed: true,
      },
      {
        where: {
          id_user: decoded.id_user,
        },
      }
    );
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return {
        success: false,
        message: "Token expired",
        status: 400,
      };
    } else {
      return {
        success: false,
        message: "Invalid token",
        status: 400,
      };
    }
  }
};

const resendEmail = async (token) => {
  // console.log(token);
  try {
    let user = await userModel.findOne({
      where: {
        token: token,
      },
    });
    if (user) {
      // console.log(user.dataValues);
      if (user.dataValues.confirmed) {
        return {
          success: false,
          message: "User already confirmed",
          status: 400,
        };
      } else {
        sendEmail(user.dataValues);
      }
    } else {
      return {
        success: false,
        message: "Invalid token",
        status: 400,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

const createUser = async (user) => {
  // console.log(user);
  try {
    let foundUser = await userModel.findOne({
      where: {
        email: user.email,
      },
    });
    if (foundUser) {
      return {
        success: false,
        message: "User already exists",
        status: 400,
      };
    } else {
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(user.password, salt);

      let newUser = await userModel.create(user).catch((err) => {
        const error = new Error("Error creating user");
        error.status = 400;
        throw error;
      });
      console.log("createUser berhasil");
      sendEmail(newUser.dataValues);
      return {
        success: true,
        status: 201,
        data: newUser,
      };
    }
  } catch (err) {
    console.log("createUser gagal", err);
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

const signIn = async (user) => {
  try {
    let foundUser = await userModel
      .findOne({
        where: {
          email: user.email,
        },
      })
      .catch((err) => {
        const error = new Error("Email not found");
        error.status = 400;
        throw error;
      });
    if (foundUser) {
      const isPasswordValid = await bcrypt
        .compare(user.password, foundUser.password)
        .catch((err) => {
          const error = new Error("Error comparing passwords");
          error.status = 400;
          throw error;
        });
      if (isPasswordValid) {
        if (foundUser.confirmed === true) {
          const token = jwt.sign(
            JSON.stringify(foundUser),
            process.env.JWT_SECRET
          );
          return {
            success: true,
            status: 200,
            data: {
              token,
              user: {
                id_user: foundUser.id_user,
                email: foundUser.email,
                name: foundUser.name,
                role: foundUser.role,
              },
            },
          };
        } else {
          return {
            success: false,
            message: "Email not verified",
            status: 400,
          };
        }
      } else {
        const error = new Error("Password is not valid");
        error.status = 400;
        throw error;
      }
    } else {
      const error = new Error("User not found");
      error.status = 400;
      throw error;
    }
  } catch (err) {
    return {
      success: false,
      message: err.message,
      status: err.status,
    };
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  signIn,
  verifyUser,
  resendEmail,
};
