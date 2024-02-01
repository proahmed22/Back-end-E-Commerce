import { asyncHandler } from "../utils/errorHandling.js"
import slugify from "slugify"


export const addOne = (model, name) => {
    return asyncHandler(async (req, res, next) => {
        req.body.slug = slugify(req.body.name)

        const document = new model(req.body)
        await document.save()
        const response = {}
        response[name] = document
        res.status(201).json({ message: " Added Successfully", ...response })
    })
}

export const getAll = (model, name) => {
    return asyncHandler(async (req, res, next) => {

        const document = await model.find()
        const response = {}
        response[name] = document
        res.status(200).json({ message: " Fetch Successfully", ...response })
    })
}

export const updateOne = (model, name) => {
    return asyncHandler(async (req, res, next) => {

        const { id } = req.params
        req.body.slug = slugify(req.body.name)

        const document = await model.findByIdAndUpdate(id, req.body, { new: true })
        !document && next(new Error(`${name} Not Found`, { cause: 404 }))
        const response = {}
        response[name] = document
        document && res.status(200).json({ message: " Updated Successfully", ...response })
    })
}

export const deleteOne = (model, name) => {
    return asyncHandler(async (req, res, next) => {

        const { id } = req.params
        const document = await model.findByIdAndDelete(id)
        !document && next(new Error(`${name} Not Found`, { cause: 404 }))
        const response = {}
        response[name] = document
        document && res.status(200).json({ message: " Deleted Successfully", ...response })
    })
}

