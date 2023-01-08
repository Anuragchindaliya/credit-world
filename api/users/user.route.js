import { Router } from "express";
// import { checkToken } from "../../middlewares/verityJWT.js";
import { createUser, loginUser, refreshToken } from "./user.controller.js";

const userRouter = Router();
// import {
//   createUser,
//   login,
//   getUserById,
//   getUsers,
//   updateUsers,
//   deleteUser,
// } from "./user.controller.js";
// userRouter.get("/", checkToken, getUsers);
// userRouter.post("/", checkToken, createUser);
// userRouter.get("/:id", checkToken, getUserById);
// userRouter.post("/login", login);
// userRouter.patch("/", checkToken, updateUsers);
// userRouter.delete("/", checkToken, deleteUser);
userRouter.post("/register", createUser);
userRouter.post("/", loginUser);
userRouter.get("/refresh", refreshToken);

export default userRouter;
