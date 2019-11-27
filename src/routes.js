const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ messege: "Hello world" });
});

module.exports = routes;
