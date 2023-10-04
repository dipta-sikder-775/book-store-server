import { Joi, validate } from "express-validation";

const validationBook = {
    body: Joi.object({
        title: Joi.string().required(),
        genre: Joi.string().required(),
        price: Joi.number().required(),
        image: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
    })
}

export const verifyBook = validate(validationBook, {}, {})

const validationBookUpdate = {
    body: Joi.object({
        title: Joi.string().optional(),
        genre: Joi.string().optional(),
        price: Joi.number().optional(),
        image: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).optional(),
    })
}

export const verifyBookUpdate = validate(validationBookUpdate, {}, {})


const validationBookReview = {
    body: Joi.object({
        review: Joi.string().required()
    })
}

export const verifyBookReview = validate(validationBookReview, {}, {})