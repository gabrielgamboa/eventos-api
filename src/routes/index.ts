import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { eventsRoutes } from "./events.routes";
import { organizerRoutes } from "./organizer.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/organizers", organizerRoutes);
routes.use("/events", eventsRoutes);
routes.use(authenticateRoutes);

export { routes };