import { Request, Response } from "express";
import { container } from "tsyringe";
import { EventDetailsService } from "./EventDetailsService";

export class EventDetailsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const eventDetailsService = container.resolve(EventDetailsService);
        const eventDetails = await eventDetailsService.execute(Number(id));
        return res.json(eventDetails);
    }
}