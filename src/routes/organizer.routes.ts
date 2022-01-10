import { Router } from "express";
import { CreateOrganizerController } from "../modules/organizer/useCases/CreateOrganizerController";

const organizerRoutes = Router();

const createOrganizerController = new CreateOrganizerController();

organizerRoutes.post("/", createOrganizerController.handle);

export { organizerRoutes };