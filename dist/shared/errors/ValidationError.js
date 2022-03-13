"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
class ValidationError {
    constructor(message, errors, statusCode = 422) {
        this.message = message;
        this.errors = errors;
        this.statusCode = statusCode;
    }
}
exports.ValidationError = ValidationError;
