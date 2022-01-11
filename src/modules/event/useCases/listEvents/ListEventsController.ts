import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListEventsService } from "./ListEventsService";

export class ListEventsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { street, number, city, state } = req.body;
        const listEventsService = container.resolve(ListEventsService);
        const events = await listEventsService.execute({ street, number, city, state });

        return res.json(events);
    }
}