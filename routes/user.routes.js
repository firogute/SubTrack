import { Router } from "express";

const userRouter = Router();

// GET /users-> GET ALL THE USERS
// GET /users/23 -> Gete a user with id 23

userRouter.get("/", (req, res) => {
  return res.send({ title: "fetch all users" });
});
userRouter.get("/:id", (req, res) => {
  return res.send({ title: "fetch all user detail" });
});
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
