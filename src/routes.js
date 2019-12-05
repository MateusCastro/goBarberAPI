import { Router } from "express";
import User from "./app/models/User";

const routes = new Router();

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "Diego Fernandes",
    email: "diego@gmail.com",
    password_hash: "2903784293"
  });

  return res.json(user);
});

export default routes;
