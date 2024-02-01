import { userModel } from "../../../../database/models/user.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";



const addAddress = asyncHandler(async (req, res, next) => {
    let result = await userModel.findByIdAndUpdate(req.user._id, { $addToSet: { addresses: req.body } }, { new: true })
    !result && next(new Error("User Not Found", { cause: 404 }))
    result && res.status(200).json({ message: " Added Successfully", result: result.addresses })
})

const removeAddress = asyncHandler(async (req, res, next) => {
    let result = await userModel.findByIdAndUpdate(req.user._id, { $pull: { addresses: { _id: req.body.address } } }, { new: true })
    !result && next(new Error("User Not Found", { cause: 404 }))
    result && res.status(200).json({ message: " removed Successfully", result: result.addresses })
})

const getAllUserAddress = asyncHandler(async (req, res, next) => {
    let result = await userModel.findOne({ _id: req.user._id })
    !result && next(new Error("User Not Found", { cause: 404 }))
    result && res.status(200).json({ message: "  Successfully", result: result.addresses })
})
export {
    addAddress,
    removeAddress,
    getAllUserAddress

}




