import { Router } from "express";
import { CreateTicketController } from "../modules/event/useCases/createTicket/CreateTicketController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const ticketsRoutes = Router();

const createTicketController = new CreateTicketController();

ticketsRoutes.post("/", ensureAuthenticated, createTicketController.handle);

export { ticketsRoutes };