import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.route.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);
// authentication router
app.use("/api/v1/auth", authRouter);
// user route
app.use("/api/v1/users", userRouter);
// subscriptions
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/login", (req, res) => {});

app.listen(PORT, async () => {
  console.log(`Server started on port http://localhost:${PORT}`);
  await connectToDatabase();
});
