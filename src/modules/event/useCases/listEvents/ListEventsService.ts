import { inject, injectable } from "tsyringe";
import { Event } from "../../../../database/entities/Event";
import { IEventsRepository } from "../../../../database/repositories/IEventsRepository";

interface IRequest {
    street?: string;
    number?: string;
    city?: string;
    state?: string;
}

@injectable()
export class ListEventsService {

    constructor(
        @inject("EventsRepository")
        private eventsRepository: IEventsRepository
    ) {}

    async execute({ street, number, city, state}: IRequest): Promise<Event[]> {
        const events = await this.eventsRepository.list(street, number, city, state);
        return events;
    }
}