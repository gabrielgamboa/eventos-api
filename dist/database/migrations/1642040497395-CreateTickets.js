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
exports.CreateTickets1642040497395 = void 0;
const typeorm_1 = require("typeorm");
class CreateTickets1642040497395 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "tickets",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: "purchase_date",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "price",
                        type: "numeric"
                    },
                    {
                        name: "user_id",
                        type: "integer",
                        isNullable: true
                    },
                    {
                        name: "event_id",
                        type: "integer",
                        isNullable: true
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserTicket",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKEventTicket",
                        referencedTableName: "events",
                        referencedColumnNames: ["id"],
                        columnNames: ["event_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                ]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("tickets");
        });
    }
}
exports.CreateTickets1642040497395 = CreateTickets1642040497395;
