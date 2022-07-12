import express from "express";
import { UserController } from "../UserControlller";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/", userController.signup);
userRouter.post("/login", userController.login);