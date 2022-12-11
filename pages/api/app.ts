import express from "express";
import cors from "cors";
import helmet from "helmet";

import { usersRouter } from "./routes/users.router";

const app = express();

app.use(helmet());
app.use(cors());

app.use("/user", usersRouter);

export { app };
