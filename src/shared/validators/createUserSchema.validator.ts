import Joi from "@hapi/joi";

export const createUserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    cpf: Joi.string().min(11).required(),
    phone: Joi.string().min(11)
});