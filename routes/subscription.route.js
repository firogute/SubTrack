import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  return res.send({ title: "GET all subscriptions" });
});
subscriptionRouter.get("/:id", (req, res) => {
  return res.send({ title: "GET subscription by id" });
});
subscriptionRouter.post("/", (req, res) => {
  return res.send({ title: "Create subscription" });
});
subscriptionRouter.delete("/:id", (req, res) => {
  return res.send({ title: "Delete a subscription" });
});
subscriptionRouter.get("/user/:id", (req, res) => {
  return res.send({ title: "GET subscription of a user" });
});
subscriptionRouter.put("/:id/cancel", (req, res) => {
  return res.send({ title: "CANCEL subscription of a user" });
});
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  return res.send({ title: "Get upcoming renewals" });
});
export default subscriptionRouter;
