import express from "express";
import {PORT} from './config/env.js';
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

// authentication router
app.use("/auth", authRouter);

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.post("/login", (req, res) => {

})


app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
})


export default app;
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});