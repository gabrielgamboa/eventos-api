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
exports.EventsRepository = void 0;
const typeorm_1 = require("typeorm");
const Event_1 = require("../../entities/Event");
class EventsRepository {
    constructor() {
        this.repository = (0, typeorm_1.getRepository)(Event_1.Event);
    }
    create({ title, description, street, number, city, state, date, ticket_price, tickets_available, organizer_id, event_type_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = this.repository.create({
                title,
                description,
                street,
                number,
                city,
                state,
                date: new Date(date),
                tickets_available,
                ticket_price,
                organizer_id,
                event_type_id
            });
            yield this.repository.save(event);
            return event;
        });
    }
    list(street, number, city, state) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventQuery = this.repository.createQueryBuilder("event");
            if (street)
                eventQuery.andWhere("event.street = :street", { street });
            if (number)
                eventQuery.andWhere("event.number = :number", { number });
            if (city)
                eventQuery.andWhere("event.city = :city", { city });
            if (state)
                eventQuery.andWhere("event.state = :state", { state });
            const events = yield eventQuery.getMany();
            return events;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // return await this.repository.findOne(id);
            // return await this.repository.createQueryBuilder("t")
            //     .select(["t.id", "t.purchase_date", "t.price", "t.user_id"])
            //     .innerJoinAndSelect("t.event", "e")
            //     .where("t.user_id = :id", { id })
            //     .getMany();
            return yield this.repository.createQueryBuilder("e")
                .innerJoinAndSelect("e.organizer", "o")
                .where("e.id = :id", { id })
                .getOne();
        });
    }
    removeOneTicketAvailable(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = yield this.repository.findOne(id);
            event.tickets_available--;
            yield this.repository.save(event);
            return event;
        });
    }
    updateEvent(event) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(event);
        });
    }
}
exports.EventsRepository = EventsRepository;
