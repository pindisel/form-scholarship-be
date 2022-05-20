const express = require("express");

const personalRoute = require("./personal.routes");
const contactRoute = require("./contact.routes");
const financeRoute = require("./finance.routes");
const studyRoute = require("./study.routes");
const educationRoute = require("./education.routes");
const languageRoute = require("./language.routes");
const jobRoute = require("./job.routes");
const refereeRoute = require("./referee.routes");
const documentRoute = require("./document.routes");
const userRoute = require("./user.routes");
const refereeformRoute = require("./refereeform.routes");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/personal",
    route: personalRoute,
  },
  {
    path: "/contact",
    route: contactRoute,
  },
  {
    path: "/finance",
    route: financeRoute,
  },
  {
    path: "/study",
    route: studyRoute,
  },
  {
    path: "/education",
    route: educationRoute,
  },
  {
    path: "/language",
    route: languageRoute,
  },
  {
    path: "/job",
    route: jobRoute,
  },
  {
    path: "/referee",
    route: refereeRoute,
  },
  {
    path: "/document",
    route: documentRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/refereeform",
    route: refereeformRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
