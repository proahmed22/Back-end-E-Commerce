import express from "express";
const brandRouter = express.Router();
import * as brands from "./controller/brand.js";
import { validation } from './../../middleware/validation.js';
import { addBrandValidation, deleteBrandValidation, updateBrandValidation } from "./brand.validation.js";
import { allowedTo, auth } from './../../middleware/auth.js';

brandRouter.route("/") // /api/v1/categories
    .post(auth, allowedTo('admin'), validation(addBrandValidation), brands.addBrand)
    .get(brands.getAllBrands);

brandRouter.route("/:id") // /api/v1/categories/:id
    .put(auth, allowedTo('admin'), validation(updateBrandValidation), brands.updateBrand)
    .delete(auth, allowedTo('admin'), validation(deleteBrandValidation), brands.deleteBrand);

export default brandRouter;
