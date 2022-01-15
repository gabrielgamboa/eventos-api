import { IValidationMessage } from "../middlewares/createUserMiddleware";

export class ValidationError {
    public readonly message;
    public readonly errors;
    public readonly statusCode;

    constructor(message: string, errors: IValidationMessage[], statusCode = 422) {
        this.message = message;
        this.errors = errors;
        this.statusCode = statusCode;
    }
}