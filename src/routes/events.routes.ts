import { Router } from "express";
import { CreateEventController } from "../modules/event/useCases/createEvent/CreateEventController";
import { EventDetailsController } from "../modules/event/useCases/eventDetails/EventDetailsController";
import { ListEventsController } from "../modules/event/useCases/listEvents/ListEventsController";
import { UpdateEventController } from "../modules/event/useCases/updateEvent/UpdateEventController";
import { ensureOrganizer } from "../shared/middlewares/ensureOrganizer";

const eventsRoutes = Router();

const createEventController = new CreateEventController();
const listEventsController = new ListEventsController();
const updateEventController = new UpdateEventController();
const eventDetailsController = new EventDetailsController();


eventsRoutes.get("/", listEventsController.handle);
eventsRoutes.get("/:id", eventDetailsController.handle);
eventsRoutes.post("/", ensureOrganizer, createEventController.handle);
eventsRoutes.patch("/:id", ensureOrganizer, updateEventController.handle);

export { eventsRoutes }