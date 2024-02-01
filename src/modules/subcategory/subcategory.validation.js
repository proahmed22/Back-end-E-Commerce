import Joi from "joi";

const addSubCategoryValidation = Joi.object({
    name: Joi.string().required().min(10).max(50)
})

const updateSubCategoryValidation = Joi.object({
    id: Joi.string().hex().length(24).required(),
    name: Joi.string().required().min(10).max(50),
})
const deleteSubCategoryValidation = Joi.object({
    id: Joi.string().hex().length(24).required()
})
export {
    addSubCategoryValidation,
    updateSubCategoryValidation,
    deleteSubCategoryValidation
}