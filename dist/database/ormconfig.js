"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
let ormConfig = {
    name: "default",
    type: process.env.DATABASE_TYPE,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
    synchronize: false,
    entities: [path_1.default.join(__dirname, "entities", "*.*"),],
    migrations: [path_1.default.join(__dirname, "migrations", "*.*")],
    cli: {
        entitiesDir: path_1.default.join(__dirname, "..", "entities"),
        migrationsDir: path_1.default.join(__dirname, "migrations")
    }
};
module.exports = ormConfig;
