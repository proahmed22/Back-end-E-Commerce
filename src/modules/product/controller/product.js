import { asyncHandler } from './../../../utils/errorHandling.js';
import { productModel } from './../../../../database/models/product.model.js';
import slugify from 'slugify';
import { deleteOne, getAll } from '../../../handlers/factor.js';
import { ApiFeatures } from '../../../utils/apiFeatures.js';

const addProduct = asyncHandler(async (req, res, next) => {
    req.body.slug = slugify(req.body.title)

    const result = await productModel(req.body)

    await result.save()
    res.status(201).json({ message: " Added Successfully", result })

})
/////
const getAllProducts = asyncHandler(async (req, res, next) => {
    let apiFeatures = new ApiFeatures(productModel.find(), req.query).paginate().sort().search().fields().filter()

    let products = await apiFeatures.mongooseQuery

    res.status(200).json({ message: " Fetch Successfully", page: apiFeatures.page, products })
})


const getSpecificProduct = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    const result = await productModel.findById(id)
    !result && next(new Error(`Product Not Found`, { cause: 404 }))
    result && res.status(200).json({ message: "Product Found Successfully", result })
})

const updateProduct = asyncHandler(async (req, res, next) => {
    const { id } = req.params
    if (req.body.title) req.body.slug = slugify(req.body.title)
    const result = await productModel.findByIdAndUpdate(id, req.body, { new: true })
    !result && next(new Error(`Product Not Found`, { cause: 404 }))
    result && res.status(200).json({ message: "Product Updated Successfully", result })
})

const deleteProduct = deleteOne(productModel, 'product')

export {
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
    getSpecificProduct
}