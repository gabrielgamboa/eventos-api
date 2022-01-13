import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListEventsService } from "./ListEventsService";

export class ListEventsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { street, number, city, state } = req.query;
        const listEventsService = container.resolve(ListEventsService);
        const events = await listEventsService.execute({ 
            street: street as string, 
            number: number as string, 
            city: city as string, 
            state: state as string
        });

        return res.json(events);
    }
}