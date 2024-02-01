import slugify from "slugify"
import { asyncHandler } from "../../../utils/errorHandling.js";
import { addOne, deleteOne, getAll, updateOne } from "../../../handlers/factor.js";
import { ApiFeatures } from "../../../utils/apiFeatures.js";
import { userModel } from './../../../../database/models/user.model.js';



const addUser = asyncHandler(async (req, res, next) => {
    const User = new userModel(req.body)
    await User.save()
    res.json({ message: "User Added Successfully", User })
})


const getAllUsers = asyncHandler(async (req, res, next) => {
    let apiFeatures = new ApiFeatures(userModel.find(), req.query).paginate().sort().search().fields().filter()

    const data = await apiFeatures.mongooseQuery

    res.status(200).json({ message: " Fetch Successfully", page: apiFeatures.page, data })
})



const updateUser = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const User = await userModel.findByIdAndUpdate(id, req.body, { new: true })
    !User && next(new Error("User Not Found", { cause: 404 }))
    User && res.status(200).json({ message: " Updated Successfully", User })
})


const updateUserPassword = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    req.body.passwordChangedAt = Date.now()
    const User = await userModel.findByIdAndUpdate(id, { password: req.body.password }, { new: true })
    !User && next(new Error("User Not Found", { cause: 404 }))
    User && res.status(200).json({ message: " Updated Successfully", User })
})


const deleteUser = deleteOne(userModel, 'user')



export {
    addUser,
    getAllUsers,
    updateUser,
    updateUserPassword,
    deleteUser
}




/**
 * Note: This file is not used .
 * in case && 
 * if the first true added the second or true 
 * if the first false added the false or the first 
 */