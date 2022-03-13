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
exports.CreateEventController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateEventService_1 = require("./CreateEventService");
class CreateEventController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: organizer_id } = req.organizer;
            const { title, description, ticket_price, street, number, city, state, date, tickets_available, event_type_id } = req.body;
            const createEventService = tsyringe_1.container.resolve(CreateEventService_1.CreateEventService);
            const event = yield createEventService.execute({ title, description, ticket_price, street, number, city, state, date, tickets_available, organizer_id, event_type_id });
            return res.json(event);
        });
    }
}
exports.CreateEventController = CreateEventController;
