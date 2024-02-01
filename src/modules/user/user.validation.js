import Joi from "joi";

const addUserValidation = Joi.object({
    userName: Joi.string(),
    email: Joi.string().required(),
    password: Joi.string().required(),


})

const updateUserValidation = Joi.object({
    id: Joi.string().hex().length(24).required(),
    userName: Joi.string(),
    
})
const deleteUserValidation = Joi.object({
    id: Joi.string().hex().length(24).required()
})
export {
    addUserValidation,
    updateUserValidation,
    deleteUserValidation
}