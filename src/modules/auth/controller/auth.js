import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import { asyncHandler } from "../../../utils/errorHandling.js";
import Jwt from 'jsonwebtoken';
import { userModel } from './../../../../database/models/user.model.js';


// signUp 

const signUp = asyncHandler(
    async (req, res, next) => {

        const cheekUser = await userModel.findOne({ email: req.body.email });
        if (cheekUser) {
            return next(new Error('User already exists'));
        }
        const user = new userModel(req.body)
        await user.save()
        return res.status(201).json({ message: 'User created successfully', user })
    }

)

// logIn 
const signIn = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return next(new Error('Invalid email or password'));
    }
    const token = Jwt.sign({ email: user.email, name: user.name, role: user.role, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    return res.status(200).json({ message: 'Login successfully', token });
});




export {
    signUp,
    signIn
}