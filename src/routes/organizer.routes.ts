import { Router } from "express";
import { CreateOrganizerController } from "../modules/organizer/useCases/createOrganizer/CreateOrganizerController";
import { createValidation } from "../shared/middlewares/createValidationMiddleware";
import { createOrganizerSchema } from "../shared/validators";
// import { createOrganizerMiddleware } from "../shared/middlewares/createOrganizerMiddleware";

const organizerRoutes = Router();

const createOrganizerController = new CreateOrganizerController();

organizerRoutes.post("/", createValidation(createOrganizerSchema), createOrganizerController.handle);

export { organizerRoutes };