import { Schema, model } from "mongoose";

const couponSchema = new Schema({
    code: {
        type: String,
        required: true,
        trim: true,
    },
    expires: {
        type: Date,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    }


}, { timestamps: true });

export const couponModel = model("coupon", couponSchema);
