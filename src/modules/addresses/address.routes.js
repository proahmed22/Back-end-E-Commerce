import express from "express";
import * as addresses from "./controller/address.js";
import { allowedTo, auth } from '../../middleware/auth.js';

const addressRouter = express.Router();

addressRouter.route("/") // /api/v1/categories
    .post(auth, allowedTo('user'), addresses.addAddress)
    .patch(auth, allowedTo('user'), addresses.removeAddress)
    .get(auth, allowedTo('user'), addresses.getAllUserAddress);


export default addressRouter;
