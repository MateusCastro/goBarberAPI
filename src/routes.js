import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ messege: "Hello world" });
});

export default routes;
