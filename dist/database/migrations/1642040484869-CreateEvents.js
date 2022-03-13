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
exports.CreateEvents1642040484869 = void 0;
const typeorm_1 = require("typeorm");
class CreateEvents1642040484869 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "events",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "street",
                        type: "varchar",
                    },
                    {
                        name: "number",
                        type: "varchar",
                    },
                    {
                        name: "city",
                        type: "varchar",
                    },
                    {
                        name: "state",
                        type: "varchar",
                    },
                    {
                        name: "date",
                        type: "timestamp",
                    },
                    {
                        name: "ticket_price",
                        type: "numeric"
                    },
                    {
                        name: "tickets_available",
                        type: "integer",
                    },
                    {
                        name: "organizer_id",
                        type: "integer",
                        isNullable: true
                    },
                    {
                        name: "event_type_id",
                        type: "integer",
                        isNullable: true
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKOrganizerEvent",
                        referencedTableName: "organizers",
                        referencedColumnNames: ["id"],
                        columnNames: ["organizer_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKEventtypesEvent",
                        referencedTableName: "event_types",
                        referencedColumnNames: ["id"],
                        columnNames: ["event_type_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                ]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("events");
        });
    }
}
exports.CreateEvents1642040484869 = CreateEvents1642040484869;
