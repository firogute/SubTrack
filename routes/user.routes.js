import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

// GET /users-> GET ALL THE USERS
// GET /users/23 -> Gete a user with id 23

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);
userRouter.post("/", (req, res) => {
  return res.send({ title: "Create a new user" });
});

userRouter.put("/:id", (req, res) => {
  return res.send({ title: "update user" });
});
userRouter.delete("/:id", (req, res) => {
  return res.send({ title: "delete a user" });
});

export default userRouter;
