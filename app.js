import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.route.js";
import subscriptionRoute from "./routes/subscription.route.js";

const app = express();

app.use(express.json());

// authentication router
app.use("/api/v1/auth", authRouter);
// user route
app.use("/api/v1/users", userRoute);
// subscriptions
app.use("/api/v1/subscriptions", subscriptionRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/login", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
