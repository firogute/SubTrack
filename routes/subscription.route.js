import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subcription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  return res.send({ title: "GET all subscriptions" });
});
subscriptionRouter.get("/:id", (req, res) => {
  return res.send({ title: "GET subscription by id" });
});
subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.delete("/:id", (req, res) => {
  return res.send({ title: "Delete a subscription" });
});
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);
subscriptionRouter.put("/:id/cancel", (req, res) => {
  return res.send({ title: "CANCEL subscription of a user" });
});
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  return res.send({ title: "Get upcoming renewals" });
});
export default subscriptionRouter;
