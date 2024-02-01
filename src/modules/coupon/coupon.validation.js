import Joi from "joi";

const createCouponValidation = Joi.object({
    code: Joi.string().required(),
    expires: Joi.date().required(),
    discount: Joi.number().required(),
})

const updateCouponValidation = Joi.object({
    id: Joi.string().hex().length(24).required(),
    code: Joi.string().required(),

})
const deleteCouponValidation = Joi.object({
    id: Joi.string().hex().length(24).required()
})

export {
    createCouponValidation,
    updateCouponValidation,
    deleteCouponValidation
}