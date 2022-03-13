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
exports.UpdateEventController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateEventService_1 = require("./UpdateEventService");
class UpdateEventController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: event_id } = req.params;
            const { title, description, street, number, city, state, date, ticket_price } = req.body;
            const updateEventService = tsyringe_1.container.resolve(UpdateEventService_1.UpdateEventService);
            const updatedEvent = yield updateEventService.execute({ event_id: Number(event_id), title, description, street, number, city, state, date, ticket_price });
            return res.json(updatedEvent);
        });
    }
}
exports.UpdateEventController = UpdateEventController;
