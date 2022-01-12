import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateEventService } from "./UpdateEventService";



export class UpdateEventController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id: event_id } = req.params;
        const { title, description, street, number, city, state, date, ticket_price } = req.body;

        const updateEventService = container.resolve(UpdateEventService);
        const updatedEvent = await updateEventService.execute({ event_id: Number(event_id), title, description, street, number, city, state, date, ticket_price });

        return res.json(updatedEvent);
    }
}