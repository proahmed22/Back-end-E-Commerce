
import { asyncHandler } from "../../../utils/errorHandling.js";
import { addOne, getAll, updateOne, deleteOne } from './../../../handlers/factor.js';
import { subCategoryModel } from './../../../../database/models/subcategory.model.js';




const addSubCategory = addOne(subCategoryModel, 'subCategory')


const getAllSubCategories = asyncHandler(
    async (req, res, next) => {

        let filterObj = {}
        if (req.params.categoryId) {
            filterObj = {category: req.params.categoryId}
        }
        const subCategories = await subCategoryModel.find(filterObj)

        res.status(200).json({ message: " Fetch Successfully", subCategories })
    })


const updateSubCategory = updateOne(subCategoryModel, 'subCategory')


const deleteSubCategory = deleteOne(subCategoryModel, 'subCategory')



export {
    addSubCategory,
    getAllSubCategories,
    updateSubCategory,
    deleteSubCategory

}




/**
 * Note: This file is not used .
 * in case && 
 * if the first true added the second or true 
 * if the first false added the false or the first 
 */