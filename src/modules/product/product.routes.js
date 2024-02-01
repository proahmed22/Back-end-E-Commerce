import express from "express";
import * as product from "./controller/product.js";
import { validation } from './../../middleware/validation.js';
import { addProductValidation, deleteProductValidation, updateProductValidation } from "./product.validation.js";
import { allowedTo, auth } from './../../middleware/auth.js';

const productRouter = express.Router();

productRouter.route("/") // /api/v1/categories
    .post(auth, allowedTo('admin'), validation(addProductValidation), product.addProduct)
    .get(product.getAllProducts)


productRouter.route("/:id") // /api/v1/categories/:id
    .put(auth, allowedTo('admin'), validation(updateProductValidation), product.updateProduct)
    .delete(auth, allowedTo('admin'), validation(deleteProductValidation), product.deleteProduct)
    .get(auth, allowedTo('admin'), product.getSpecificProduct)



export default productRouter;
