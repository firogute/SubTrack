import { Router } from "express";

const authRouter = Router();

authRouter.get("/sign-up", (req, res) => {
  return res.send({ title: "SIGN UP" });
});
authRouter.post("/sign-in", (req, res) => {
  return res.send({ title: "SIGN IN" });
});
authRouter.post("/sign-out", (req, res) => {
  return res.send({ title: "SIGN OUT" });
});
export default authRouter;
