"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureOrganizer = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const OrganizersRepository_1 = require("../../database/repositories/implementations/OrganizersRepository");
const AppError_1 = require("../errors/AppError");
function ensureOrganizer(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new AppError_1.AppError("Token missing", 401);
        }
        const [, token] = authHeader.split(" ");
        try {
            const { id: organizer_id } = (0, jsonwebtoken_1.verify)(token, process.env.SECRET_KEY);
            const organizersRepository = new OrganizersRepository_1.OrganizersRepository();
            const organizer = yield organizersRepository.findById(organizer_id);
            if (!organizer) {
                throw new AppError_1.AppError("Organizer does not exists", 401);
            }
            request.organizer = organizer;
            return next();
        }
        catch (error) {
            throw new AppError_1.AppError("Invalid token", 401);
        }
    });
}
exports.ensureOrganizer = ensureOrganizer;
