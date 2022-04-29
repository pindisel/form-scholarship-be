const express = require("express");

const personalRoute = require("./personal.routes");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/personal",
    route: personalRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
