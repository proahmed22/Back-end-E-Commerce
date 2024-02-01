import express from "express";
import * as reviews from "./controller/reviews.js";
import { validation } from './../../middleware/validation.js';
import { allowedTo, auth } from './../../middleware/auth.js';
import { createReviewValidation, deleteReviewValidation, updateReviewValidation } from "./reviews.validation.js";

const reviewRouter = express.Router();

reviewRouter.route("/") // /api/v1/categories
    .post(auth, allowedTo('user'), validation(createReviewValidation), reviews.createReview)
    .get(reviews.getAllReviews);

reviewRouter.route("/:id") // /api/v1/categories/:id
    .put(auth, allowedTo('user'), validation(updateReviewValidation), reviews.updateReview)
    .delete(auth, allowedTo('admin', 'user'), validation(deleteReviewValidation), reviews.deleteReview);

export default reviewRouter;
