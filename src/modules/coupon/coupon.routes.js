import express from "express";
import * as coupon from "./controller/coupon.js";
import { validation } from '../../middleware/validation.js';
import { allowedTo, auth } from '../../middleware/auth.js';
import { createCouponValidation, deleteCouponValidation, updateCouponValidation } from "./coupon.validation.js";

const couponRouter = express.Router();

couponRouter.route("/") // /api/v1/categories
    .post(auth, allowedTo('user'), validation(createCouponValidation), coupon.createCoupon)
    .get(coupon.getAllCoupons);

couponRouter.route("/:id") // /api/v1/categories/:id
    .put(auth, allowedTo('user'), validation(updateCouponValidation), coupon.updateCoupon)
    .get(coupon.getCoupon)
    .delete(auth, allowedTo('admin'), validation(deleteCouponValidation), coupon.deleteCoupon);

export default couponRouter;
