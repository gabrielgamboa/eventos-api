import { Router } from "express";
import { CreateEventController } from "../modules/event/useCases/createEvent/CreateEventController";

const eventsRoutes = Router();

const createEventController = new CreateEventController();

eventsRoutes.post("/", createEventController.handle);

export { eventsRoutes }