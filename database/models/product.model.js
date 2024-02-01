import { Schema, model } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [10, 'too short product title']
    },
    slug: {
        type: String,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    priceAfterDiscount: {
        type: Number,
        default: 0,
        min: 0
    },
    description: {
        type: String,
        maxlength: [100, 'too long product title'],
        minlength: [10, 'too short product title'],
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        default: 0,
        min: 0,
        required: [true, 'quantity is required']
    },
    sold: {
        type: Number,
        default: 0,
        min: 0
    },
    imaCover: {
        type: String,
    },
    images: {
        type: [String]
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    subCategory: {
        type: Schema.Types.ObjectId,
        ref: 'subCategory',
        required: true
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'brand',
        required: true
    },
    ratingAvg: {
        type: Number,
        min: 1,
        max: 5
    },
    ratingCount: {
        type: Number,
        min: 0
    }
}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

productSchema.virtual('myReviews', {
    ref: 'review',
    localField: '_id',
    foreignField: 'product'
})

productSchema.pre(/^find/, function () {
    this.populate('myReviews')
})
export const productModel = model('product', productSchema);