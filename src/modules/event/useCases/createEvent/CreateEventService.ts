import { inject, injectable } from "tsyringe";
import { Event } from "../../../../database/entities/Event";
import { IEventsRepository } from "../../../../database/repositories/IEventsRepository";
import { ICreateEventDTO } from "../../dtos/ICreateEventDTO";


@injectable()
export class CreateEventService {
    constructor(
        @inject("EventsRepository")
        private eventsRepository: IEventsRepository
    ) {}

    async execute({title, description, ticket_price, street, number, city, state, date, tickets_available, organizer_id, event_type_id}: ICreateEventDTO): Promise<Event> {
        const event = await this.eventsRepository.create({ title, description, ticket_price, street, number, city, state, date, tickets_available,  organizer_id, event_type_id });
        return event;
    }
}