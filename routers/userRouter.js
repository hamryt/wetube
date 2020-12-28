import express from "express";
import { editProfile, users, usersDetail } from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.usersDetail, usersDetail);
userRouter.get(routes.editProfile, editProfile);


export default userRouter;