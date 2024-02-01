import slugify from "slugify"
import { asyncHandler } from "../../../utils/errorHandling.js";
import { brandModel } from './../../../../database/models/brand.model.js';
import { addOne, deleteOne, getAll, updateOne } from "../../../handlers/factor.js";
import { ApiFeatures } from "../../../utils/apiFeatures.js";



const addBrand = addOne(brandModel, 'brand')


const getAllBrands = asyncHandler(async (req, res, next) => {
    let apiFeatures = new ApiFeatures(brandModel.find(), req.query).paginate().sort().search().fields().filter()

    const data = await apiFeatures.mongooseQuery

    res.status(200).json({ message: " Fetch Successfully", page: apiFeatures.page, data })
})



const updateBrand = updateOne(brandModel, 'brand')


const deleteBrand = deleteOne(brandModel, 'brand')



export {
    addBrand,
    getAllBrands,
    updateBrand,
    deleteBrand

}




/**
 * Note: This file is not used .
 * in case && 
 * if the first true added the second or true 
 * if the first false added the false or the first 
 */