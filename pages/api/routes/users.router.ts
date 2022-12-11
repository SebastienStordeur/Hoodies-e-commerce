import express from "express";
import { httpSignup, httpLogin } from "./users.controller";

const usersRouter = express.Router();

usersRouter.post("/signup", httpSignup);

export { usersRouter };
