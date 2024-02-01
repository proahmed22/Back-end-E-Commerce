import Joi from "joi";

const addBrandValidation = Joi.object({
    name: Joi.string().required().min(10).max(50),
    slug: Joi.string().required()
})

const updateBrandValidation = Joi.object({
    id: Joi.string().hex().length(24).required(),
    name: Joi.string().required().min(10).max(50),
})
const deleteBrandValidation = Joi.object({
    id: Joi.string().hex().length(24).required()
})
export {
    addBrandValidation,
    updateBrandValidation,
    deleteBrandValidation
}