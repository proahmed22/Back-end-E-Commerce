import Jwt from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
import { asyncHandler } from './../utils/errorHandling.js';
import { userModel } from './../../database/models/user.model.js';



export const auth = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return next(
            new Error("Token Not Provided", { cause: StatusCodes.UNAUTHORIZED })
        );
    }

    let decodedToken = await Jwt.verify(token, process.env.JWT_SECRET)
    
    if (!decodedToken) {
        return next(
            new Error("Invalid Token", { cause: StatusCodes.UNAUTHORIZED })
        );
    }

    let user = await userModel.findById(decodedToken.id);

    if (!user) {
        return next(
            new Error("Not registered account", { cause: StatusCodes.NOT_FOUND })
        );
    }

    if (user.passwordChangedAt) {
        let changePasswordDate = parseInt(user.passwordChangedAt.getTime() / 1000);
        if (changePasswordDate > decodedToken.iat) {
            return next(
                new Error("Expired Token ", { cause: StatusCodes.BAD_REQUEST })
            );
        }
    }

    req.user = user;

    return next();
}


export const allowedTo = (...roles) => {
    return asyncHandler(async (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            console.log(req.user.role);
            return next(new Error("Not authorized" + req.user.role, { cause: StatusCodes.FORBIDDEN }));
        }
        next()
    })
}



