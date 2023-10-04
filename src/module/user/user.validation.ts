import {Joi, validate} from 'express-validation'
const userValidation = {
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}

export const verifyUser = validate(userValidation,{},{})



const loginValidation = {
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}

export const verifyLogin = validate(loginValidation,{},{})
