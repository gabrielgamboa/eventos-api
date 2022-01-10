import { container } from "tsyringe";

import { OrganizersRepository } from "../database/repositories/implementations/OrganizersRepository";
import { IOrganizersRepository } from "../database/repositories/IOrganizersRepository";
import { UsersRepository } from "../database/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../database/repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IOrganizersRepository>(
    "OrganizersRepository",
    OrganizersRepository
);