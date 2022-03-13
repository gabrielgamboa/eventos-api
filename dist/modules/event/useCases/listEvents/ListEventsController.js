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
exports.ListEventsController = void 0;
const tsyringe_1 = require("tsyringe");
const ListEventsService_1 = require("./ListEventsService");
class ListEventsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { street, number, city, state } = req.query;
            const listEventsService = tsyringe_1.container.resolve(ListEventsService_1.ListEventsService);
            const events = yield listEventsService.execute({
                street: street,
                number: number,
                city: city,
                state: state
            });
            return res.json(events);
        });
    }
}
exports.ListEventsController = ListEventsController;
