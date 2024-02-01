import { asyncHandler } from "../../../utils/errorHandling.js";
import { addOne, deleteOne, getAll, updateOne } from "../../../handlers/factor.js";
import { ApiFeatures } from "../../../utils/apiFeatures.js";
import { reviewModel } from '../../../../database/models/review.mode.js';



const createReview = asyncHandler(async (req, res, next) => {
    req.body.user = req.user._id
    console.log(req.user);
    let isReview = await reviewModel.findOne({ user: req.user._id, product: req.body.product })
    if (isReview) return next(new Error('You have already reviewed this product', { cause: 409 }))
    let result = new reviewModel(req.body)
    await result.save()
    res.json({ message: "Review Added Successfully", result })
})


const getAllReviews = asyncHandler(async (req, res, next) => {
    let apiFeatures = new ApiFeatures(reviewModel.find(), req.query).paginate().sort().search().fields().filter()

    let data = await apiFeatures.mongooseQuery

    res.status(200).json({ message: " Fetch Successfully", page: apiFeatures.page, data })
})



const updateReview = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const review = await reviewModel.findOneAndUpdate({ _id: id, user: req.user._id }, req.body, { new: true })
    !review && next(new Error("Review Not Found Or You are not authorized to Update this review", { cause: 404 }))
    review && res.status(200).json({ message: " Updated Successfully", User })
})




const deleteReview = deleteOne(reviewModel, 'review')



export {
    createReview,
    getAllReviews,
    updateReview,
    deleteReview
}




