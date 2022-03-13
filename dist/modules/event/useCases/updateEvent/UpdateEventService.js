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
exports.UpdateEventService = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("../../../../shared/errors/AppError");
let UpdateEventService = class UpdateEventService {
    constructor(eventsRepostiory) {
        this.eventsRepostiory = eventsRepostiory;
    }
    execute({ event_id, title, description, street, number, city, state, date, ticket_price }) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = yield this.eventsRepostiory.findById(event_id);
            if (!event)
                throw new AppError_1.AppError("Event not found");
            if (title)
                event.title = title;
            if (description)
                event.description = description;
            if (street)
                event.street = street;
            if (number)
                event.number = number;
            if (city)
                event.city = city;
            if (state)
                event.state = state;
            if (date)
                event.date = new Date(date);
            if (ticket_price)
                event.ticket_price = ticket_price;
            const updatedEvent = yield this.eventsRepostiory.updateEvent(event);
            return updatedEvent;
        });
    }
};
UpdateEventService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("EventsRepository")),
    __metadata("design:paramtypes", [Object])
], UpdateEventService);
exports.UpdateEventService = UpdateEventService;
