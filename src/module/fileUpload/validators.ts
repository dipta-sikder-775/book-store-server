import { Joi, validate } from "express-validation";

const deleteFileValidator = {
    params: Joi.object({
        id: Joi.string().required(),
    }),
};

export const validateDeleteFile = validate(
    deleteFileValidator,
    {
        keyByField: true,
    },
    {}
);
