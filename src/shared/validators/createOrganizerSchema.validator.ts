import Joi from "@hapi/joi";

export const createOrganizer = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});