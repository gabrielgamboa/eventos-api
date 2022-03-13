"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.AuthenticateUserService = void 0;
const tsyringe_1 = require("tsyringe");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = require("../../../../shared/errors/AppError");
let AuthenticateUserService = class AuthenticateUserService {
    constructor(usersRepository, organizersRepository) {
        this.usersRepository = usersRepository;
        this.organizersRepository = organizersRepository;
    }
    execute({ email, password, type }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = type === "USER" ? this.usersRepository : this.organizersRepository;
            const user = yield repository.findByEmail(email);
            if (!user)
                throw new AppError_1.AppError("E-mail or password is incorrect!", 401);
            const passwordMatch = yield (0, bcrypt_1.compare)(password, user.password);
            if (!passwordMatch)
                throw new AppError_1.AppError("E-mail or password is incorrect!", 401);
            const token = (0, jsonwebtoken_1.sign)({ id: user.id, name: user.name, email: user.email, type }, process.env.SECRET_KEY, {
                expiresIn: "7d"
            });
            return token;
        });
    }
};
AuthenticateUserService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("UsersRepository")),
    __param(1, (0, tsyringe_1.inject)("OrganizersRepository")),
    __metadata("design:paramtypes", [Object, Object])
], AuthenticateUserService);
exports.AuthenticateUserService = AuthenticateUserService;
