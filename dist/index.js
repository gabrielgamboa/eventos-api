"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
require("reflect-metadata");
require("./database");
require("./shared/container");
const routes_1 = require("./routes");
const AppError_1 = require("./shared/errors/AppError");
const ValidationError_1 = require("./shared/errors/ValidationError");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.routes);
app.use((err, request, response, next) => {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({ message: err.message });
    }
    if (err instanceof ValidationError_1.ValidationError) {
        return response.status(err.statusCode).json({
            message: err.message,
            errors: err.errors
        });
    }
    return response.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message} `
    });
});
app.listen(process.env.PORT || 3333, () => console.log(`Server is running on port ${process.env.PORT}`));
