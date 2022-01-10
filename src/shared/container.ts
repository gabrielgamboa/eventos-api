import { container } from "tsyringe";
import { UsersRepository } from "../database/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../database/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);