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
exports.TicketsRepository = void 0;
const typeorm_1 = require("typeorm");
const Ticket_1 = require("../../entities/Ticket");
class TicketsRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Ticket_1.Ticket);
    }
    create({ price, user_id, event_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const ticket = this.repository.create({
                price,
                purchase_date: new Date(),
                user_id,
                event_id
            });
            yield this.repository.save(ticket);
            return ticket;
        });
    }
    list(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.createQueryBuilder("t")
                .select(["t.id", "t.purchase_date", "t.price", "t.user_id"])
                .innerJoinAndSelect("t.event", "e")
                .where("t.user_id = :id", { id })
                .getMany();
        });
    }
}
exports.TicketsRepository = TicketsRepository;
