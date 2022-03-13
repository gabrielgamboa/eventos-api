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
exports.OrganizersRepository = void 0;
const typeorm_1 = require("typeorm");
const Organizer_1 = require("../../entities/Organizer");
class OrganizersRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Organizer_1.Organizer);
    }
    create({ name, email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const organizer = this.repository.create({
                name,
                email,
                password,
            });
            yield this.repository.save(organizer);
            return organizer;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne({ email });
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne(id);
        });
    }
}
exports.OrganizersRepository = OrganizersRepository;
