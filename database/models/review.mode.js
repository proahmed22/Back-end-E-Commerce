import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
    review: {
        type: String,
        required: true,
        trim: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'product'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    rate: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    }


}, { timestamps: true });

reviewSchema.pre(/^find/, function () {
    this.populate('user', 'name')
})
export const reviewModel = model("review", reviewSchema);
