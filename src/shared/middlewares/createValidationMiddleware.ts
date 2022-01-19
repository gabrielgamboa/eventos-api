import Joi from "@hapi/joi";
import { NextFunction, Request, Response } from "express";
import { ValidationError } from "../errors/ValidationError";

export interface IValidationMessage {
    field: string;
    error: string;
}

export function createValidation(entitySchema: Joi.ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {

        const validationResult = entitySchema.validate(req.body, {
            abortEarly: false
        });

        if (validationResult.error) {
            const validationMessages: IValidationMessage[] = validationResult.error.details.map(error => (
                {
                    field: error.path[0] as string,
                    error: error.message
                }
            ));

            throw new ValidationError("Request validation error", validationMessages);
        }

        return next();
    }
}