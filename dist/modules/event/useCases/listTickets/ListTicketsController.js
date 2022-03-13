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
exports.ListTicketsController = void 0;
const tsyringe_1 = require("tsyringe");
const ListTicketsService_1 = require("./ListTicketsService");
class ListTicketsController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: user_id } = req.user;
            const listTicketsController = tsyringe_1.container.resolve(ListTicketsService_1.ListTicketsService);
            const tickets = yield listTicketsController.execute(user_id);
            return res.json(tickets);
        });
    }
}
exports.ListTicketsController = ListTicketsController;
