import { container } from "tsyringe";

import { OrganizersRepository } from "../database/repositories/implementations/OrganizersRepository";
import { IOrganizersRepository } from "../database/repositories/IOrganizersRepository";
import { UsersRepository } from "../database/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../database/repositories/IUsersRepository";
import { EventsRepository } from "../database/repositories/implementations/EventsRepository";
import { IEventsRepository } from "../database/repositories/IEventsRepository";
import { TicketsRepository } from "../database/repositories/implementations/TicketsRepository";
import { ITicketsRepository } from "../database/repositories/ITicketsRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IOrganizersRepository>(
    "OrganizersRepository",
    OrganizersRepository
);

container.registerSingleton<IEventsRepository>(
    "EventsRepository",
    EventsRepository
);

container.registerSingleton<ITicketsRepository>(
    "TicketsRepository",
    TicketsRepository
);