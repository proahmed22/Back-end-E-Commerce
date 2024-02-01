import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [2, 'too short Category name']
    },
    slug: {
        type: String,
        lowercase: true
    },
    image: {
        type: String,
    }
}, { timestamps: true });

export const categoryModel = model('category', categorySchema);