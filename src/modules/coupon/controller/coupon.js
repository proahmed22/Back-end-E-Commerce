import { asyncHandler } from "../../../utils/errorHandling.js";
import { addOne, deleteOne, getAll, updateOne } from "../../../handlers/factor.js";
import { ApiFeatures } from "../../../utils/apiFeatures.js";
import { couponModel } from './../../../../database/models/coupon.model.js';
import qrcode from 'qrcode';


const createCoupon = asyncHandler(async (req, res, next) => {
    let result = new couponModel(req.body)
    await result.save()
    res.json({ message: " Successfully", result })
})


const getAllCoupons = asyncHandler(async (req, res, next) => {
    let apiFeatures = new ApiFeatures(couponModel.find(), req.query).paginate().sort().search().fields().filter()

    let data = await apiFeatures.mongooseQuery

    res.status(200).json({ message: " Fetch Successfully", page: apiFeatures.page, data })
})

const getCoupon = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    let url = await qrcode.toDataURL(result.code)
    const result = await couponModel.findById(id)
    !result && next(new Error(`Coupon Not Found`, { cause: 404 }))
    result && res.status(200).json({ message: "Coupon Found Successfully", result })
})



const updateCoupon = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const review = await couponModel.findOneAndUpdate(id, req.body, { new: true })
    !review && next(new Error("coupon Not Found Or You are not authorized to Update this review", { cause: 404 }))
    review && res.status(200).json({ message: " Updated Successfully", User })
})




const deleteCoupon = deleteOne(couponModel, 'coupon')



export {
    createCoupon,
    getAllCoupons,
    getCoupon,
    updateCoupon,
    deleteCoupon
}




