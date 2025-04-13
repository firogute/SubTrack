import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";

const app = express();

app.use(express.json());

// authentication router
app.use("/auth", authRouter);

// user route

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
export default app;
