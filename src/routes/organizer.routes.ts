import { Router } from "express";
import { CreateOrganizerController } from "../modules/organizer/useCases/createOrganizer/CreateOrganizerController";

const organizerRoutes = Router();

const createOrganizerController = new CreateOrganizerController();

organizerRoutes.post("/", createOrganizerController.handle);

export { organizerRoutes };