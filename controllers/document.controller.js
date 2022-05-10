const documentServices = require("../services/document.service");
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
    contentDisposition: "inline",
    contentType: multerS3.AUTO_CONTENT_TYPE,
  }),
});

const getDocuments = async (req, res) => {
  try {
    let documents = await documentServices.getDocuments();
    res.send(documents);
  } catch (err) {
    res.send(err);
  }
};

const createDocument = async (req, res) => {
  try {
    upload.array("files", 9)(req, res, async (err) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        // console.log(req.files);
        const documents = {
          id_passport: req.files[0].location,
          edu_certificate: req.files[1].location,
          academic_transcript: req.files[2].location,
          motivation_letter: req.files[3].location,
          language_test: req.files[4].location,
          arabic_certificate: req.files[5].location,
          curriculum_vitae: req.files[6].location,
          research_proposal: req.files[7].location,
          admission_receipt: req.files[8].location,
        };
        console.log(documents);
        const newDocument = await documentServices.createDocument(documents);
        // console.log(newDocument);
        res.send(newDocument).status(newDocument.status);
      }
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getDocuments,
  createDocument,
};
