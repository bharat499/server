import express from "express";

import {
  getusers,
  createUser,
  updateUser,
  delateUser
} from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.get("/",  getusers);
userRouter.post("/add", createUser);
userRouter.put("/:id",  updateUser);
userRouter.delete("/:id", delateUser);
export default userRouter;
