"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createValidation = void 0;
const ValidationError_1 = require("../errors/ValidationError");
function createValidation(entitySchema) {
    return (req, res, next) => {
        const validationResult = entitySchema.validate(req.body, {
            abortEarly: false
        });
        if (validationResult.error) {
            const validationMessages = validationResult.error.details.map(error => ({
                field: error.path[0],
                error: error.message
            }));
            throw new ValidationError_1.ValidationError("Request validation error", validationMessages);
        }
        return next();
    };
}
exports.createValidation = createValidation;
