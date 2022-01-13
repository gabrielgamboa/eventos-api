import { inject, injectable } from "tsyringe";
import { Event } from "../../../../database/entities/Event";
import { IEventsRepository } from "../../../../database/repositories/IEventsRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
export class EventDetailsService {
    constructor(
        @inject("EventsRepository")
        private eventsRepository: IEventsRepository
    ) {}
    
    async execute(id: number): Promise<Event> {
        const event = await this.eventsRepository.findById(id);

        if (!event)
            throw new AppError("Event not found");

        return event;
    }
}