import { Router } from "express";
import { CreateEventController } from "../modules/event/useCases/createEvent/CreateEventController";
import { ensureOrganizer } from "../shared/middlewares/ensureOrganizer";

const eventsRoutes = Router();

const createEventController = new CreateEventController();

eventsRoutes.post("/", ensureOrganizer, createEventController.handle);

export { eventsRoutes }