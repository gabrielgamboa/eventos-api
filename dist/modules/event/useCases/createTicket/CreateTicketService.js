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
exports.CreateTicketService = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = require("../../../../shared/errors/AppError");
let CreateTicketService = class CreateTicketService {
    constructor(ticketsRepository, eventsRepository) {
        this.ticketsRepository = ticketsRepository;
        this.eventsRepository = eventsRepository;
    }
    execute({ user_id, event_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = yield this.eventsRepository.findById(event_id);
            if (!event.tickets_available)
                throw new AppError_1.AppError("No tickets available for this event!");
            const { ticket_price } = event;
            const ticket = yield this.ticketsRepository.create({ user_id, event_id, price: ticket_price });
            yield this.eventsRepository.removeOneTicketAvailable(event_id);
            return ticket;
        });
    }
};
CreateTicketService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("TicketsRepository")),
    __param(1, (0, tsyringe_1.inject)("EventsRepository")),
    __metadata("design:paramtypes", [Object, Object])
], CreateTicketService);
exports.CreateTicketService = CreateTicketService;
