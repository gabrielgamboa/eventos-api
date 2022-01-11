import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTicketService } from "./CreateTicketService";

export class CreateTicketController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { event_id } = req.body;
        const { id: user_id } = req.user;

        const createTicketService = container.resolve(CreateTicketService);
        const ticket = await createTicketService.execute({ event_id, user_id });
        return res.status(201).json(ticket);
    }
}