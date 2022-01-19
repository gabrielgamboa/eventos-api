import { Router } from "express";
import { CreateOrganizerController } from "../modules/organizer/useCases/createOrganizer/CreateOrganizerController";
import { createOrganizerMiddleware } from "../shared/middlewares/createOrganizerMiddleware";

const organizerRoutes = Router();

const createOrganizerController = new CreateOrganizerController();

organizerRoutes.post("/", createOrganizerMiddleware, createOrganizerController.handle);

export { organizerRoutes };