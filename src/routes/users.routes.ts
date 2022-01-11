import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListTicketsController } from "../modules/event/useCases/listTickets/ListTicketsController";
import { ensureAuthenticated } from "../shared/middlewares/ensureAuthenticated";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listTicketsController = new ListTicketsController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/tickets", ensureAuthenticated, listTicketsController.handle);

export { usersRoutes };