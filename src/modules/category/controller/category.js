import slugify from "slugify"
import { categoryModel } from './../../../../database/models/category.model.js';
import { asyncHandler } from "../../../utils/errorHandling.js";
import { addOne, deleteOne, getAll, updateOne } from "../../../handlers/factor.js";
import { ApiFeatures } from './../../../utils/ApiFeatures.js';



const addCategory = addOne(categoryModel, 'Category')

const getAllCategories = asyncHandler(async (req, res, next) => {

    let apiFeatures = new ApiFeatures(categoryModel.find(), req.query).paginate().sort().search().fields().filter()

    const data = await apiFeatures.mongooseQuery

    res.status(200).json({ message: " Fetch Successfully", page: apiFeatures.page, data })
})


const updateCategory = updateOne(categoryModel, 'Category')

const deleteCategory = deleteOne(categoryModel, 'Category')



export {
    addCategory,
    getAllCategories,
    updateCategory,
    deleteCategory

}




/**
 * Note: This file is not used .
 * in case && 
 * if the first true added the second or true 
 * if the first false added the false or the first 
 */