import express from "express";
import * as subCategory from "./controller/subcategory.js";
import { validation } from './../../middleware/validation.js';
import { addSubCategoryValidation, deleteSubCategoryValidation, updateSubCategoryValidation } from "./subcategory.validation.js";
import { allowedTo, auth } from '../../middleware/auth.js';

const subCategoryRouter = express.Router({ mergeParams: true });

subCategoryRouter.route("/") // /api/v1/categories
    .post(auth, allowedTo('admin'), validation(addSubCategoryValidation), subCategory.addSubCategory)
    .get(subCategory.getAllSubCategories);

subCategoryRouter.route("/:id") // /api/v1/categories/:id
    .put(auth, allowedTo('admin'), validation(updateSubCategoryValidation), subCategory.updateSubCategory)
    .delete(auth, allowedTo('admin'), validation(deleteSubCategoryValidation), subCategory.deleteSubCategory);

export default subCategoryRouter;
