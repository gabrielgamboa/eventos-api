import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateEventService } from "./CreateEventService";

export class CreateEventController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { title, description, ticket_price, street, number, city, state, date, tickets_available, organizer_id, event_type_id } = req.body;
        const createEventService = container.resolve(CreateEventService);
        const event = await createEventService.execute({ title, description, ticket_price, street, number, city, state, date, tickets_available,  organizer_id, event_type_id });
        return res.json(event);
    }
}