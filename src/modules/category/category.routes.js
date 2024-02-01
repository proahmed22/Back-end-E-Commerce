import express from "express";
import * as category from "./controller/category.js";
import subCategoryRouter from "../subcategory/subcategory.routes.js";
import { validation } from "../../middleware/validation.js";
import { addCategoryValidation, deleteCategoryValidation, updateCategoryValidation } from "./category.validation.js";
import { allowedTo, auth } from '../../middleware/auth.js';

const categoryRouter = express.Router();


categoryRouter.use('/:categoryId/subcategories', subCategoryRouter);
categoryRouter.route("/") // /api/v1/categories
    .post(auth, allowedTo('admin'), validation(addCategoryValidation), category.addCategory)
    .get(category.getAllCategories);

categoryRouter.route("/:id") // /api/v1/categories/:id
    .put(auth, allowedTo('admin'), validation(updateCategoryValidation), category.updateCategory)
    .delete(auth, allowedTo('admin'), validation(deleteCategoryValidation), category.deleteCategory);

export default categoryRouter;
