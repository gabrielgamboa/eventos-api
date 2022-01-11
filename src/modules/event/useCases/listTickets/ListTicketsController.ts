import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTicketsService } from "./ListTicketsService";

export class ListTicketsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id: user_id } = req.user;
        const listTicketsController = container.resolve(ListTicketsService);
        const tickets = await listTicketsController.execute(user_id);
        return res.json(tickets);
    }
}