import joi from 'joi'

const addProductValidation = joi.object({
    title: joi.string().required().min(10).max(50)
})
const updateProductValidation = joi.object({
    id: joi.string().hex().length(24).required(),
    title: joi.string().required().min(10).max(50),
    slug: joi.string().required(),
    price: joi.number().required(),
    description: joi.string().min(2).max(100).required(),
    stock: joi.number().required().min(0).max(1000),
})

const deleteProductValidation = joi.object({
    id: joi.string().hex().length(24).required()
})

export {
    addProductValidation,
    updateProductValidation,
    deleteProductValidation
}