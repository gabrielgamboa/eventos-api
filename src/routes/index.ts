import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { organizerRoutes } from "./organizer.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/organizers", organizerRoutes);
routes.use(authenticateRoutes);

export { routes };