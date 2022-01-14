import path from "path";
import { ConnectionOptions } from "typeorm";

let ormConfig = {
  name: "default",
  type: process.env.DATABASE_TYPE,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
  synchronize: false,
  entities: [path.join(__dirname, "entities", "*.*"),],
  migrations: [path.join(__dirname, "migrations", "*.*")],
  cli: {
    entitiesDir: path.join(__dirname, "..", "entities"),
    migrationsDir: path.join(__dirname, "migrations")
  }
} as ConnectionOptions;

export = ormConfig;

