import { inject, injectable } from "tsyringe";
import { Event } from "../../../../database/entities/Event";
import { IEventsRepository } from "../../../../database/repositories/IEventsRepository";
import { AppError } from "../../../../shared/errors/AppError";

interface IRequest {
    event_id: number;
    title?: string;
    description?: string;
    street?: string;
    number?: string;
    city?: string;
    state?: string;
    date?: Date;
    ticket_price?: number;
}

@injectable()
export class UpdateEventService {
    
    constructor(
        @inject("EventsRepository")
        private eventsRepostiory: IEventsRepository
    ) {}

    async execute({ event_id, title, description, street, number, city, state, date, ticket_price }: IRequest): Promise<Event> {
        const event = await this.eventsRepostiory.findById(event_id);

        if (!event) 
            throw new AppError("Event not found");

        if (title) event.title = title;
        if (description) event.description = description;
        if (street) event.street = street;
        if (number) event.number = number;
        if (city) event.city = city;
        if (state) event.state = state;
        if (date) event.date = new Date(date);
        if (ticket_price) event.ticket_price = ticket_price;

        const updatedEvent = await this.eventsRepostiory.updateEvent(event);

        return updatedEvent;
    }
}