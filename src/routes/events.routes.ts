import { Router } from "express";
import { CreateEventController } from "../modules/event/useCases/createEvent/CreateEventController";
import { ListEventsController } from "../modules/event/useCases/listEvents/ListEventsController";
import { ensureOrganizer } from "../shared/middlewares/ensureOrganizer";

const eventsRoutes = Router();

const createEventController = new CreateEventController();
const listEventsController = new ListEventsController();

eventsRoutes.post("/", ensureOrganizer, createEventController.handle);
eventsRoutes.get("/", listEventsController.handle);

export { eventsRoutes }