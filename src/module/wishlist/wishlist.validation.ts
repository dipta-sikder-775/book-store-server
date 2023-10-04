import { Joi, validate } from "express-validation";

const wishlistValidation = {
    body: Joi.object({
        userId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        bookId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    })
}

export const verifyWishlist = validate(wishlistValidation,{},{})