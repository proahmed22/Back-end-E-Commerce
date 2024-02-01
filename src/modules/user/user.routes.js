import express from "express";
const userRouter = express.Router();
import * as user from "./controller/user.js";
import { validation } from '../../middleware/validation.js';
import { addUserValidation, deleteUserValidation, updateUserValidation } from "./user.validation.js";
import { auth } from './../../middleware/auth.js';

userRouter.route("/") // /api/v1/categories
    .post(validation(addUserValidation), user.addUser)
    .get(user.getAllUsers)

userRouter.route("/:id") // /api/v1/categories/:id
    .put(validation(updateUserValidation), user.updateUser)
    .delete(validation(deleteUserValidation), user.deleteUser)
    .patch(auth,user.updateUserPassword)

export default userRouter;
