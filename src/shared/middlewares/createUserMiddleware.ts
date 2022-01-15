import { NextFunction, Request, Response  } from "express";
import { ValidationError } from "../errors/ValidationError";
import { createUserSchema } from "../validators";

export interface IValidationMessage {
    field: string;
    error: string;
}

export async function createUserMiddleware(req: Request, res: Response, next: NextFunction) {
    const result = createUserSchema.validate(req.body, {
        abortEarly: false
    });

    if (result.error) {
        const validationMessages: IValidationMessage[] = result.error.details.map(error => (
            {
                field: error.path[0] as string,
                error: error.message
            }
        ));

        throw new ValidationError("Request validation error", validationMessages);
    }

    return next();
}