import { getRepository, Repository } from "typeorm";
import { ICreateEventDTO } from "../../../modules/event/dtos/ICreateEventDTO";
import { IEventsRepository } from "../IEventsRepository";
import { Event } from "../../entities/Event";

export class EventsRepository implements IEventsRepository {
    private repository: Repository<Event>;

    constructor() {
        this.repository = getRepository(Event);
    }

    async create({ title, description, street, number, city, state, date, ticket_price, tickets_available, organizer_id, event_type_id }: ICreateEventDTO): Promise<Event> {
        const event = this.repository.create({
            title,
            description,
            street,
            number,
            city,
            state,
            date: new Date(date),
            tickets_available,
            ticket_price,
            organizer_id,
            event_type_id
        });

        await this.repository.save(event);

        return event;
    }
    async list(street?: string, number?: string, city?: string, state?: string): Promise<Event[]> {
        const eventQuery = this.repository.createQueryBuilder("event");

        if (street)
            eventQuery.andWhere("event.street = :street", { street });

        if (number)
            eventQuery.andWhere("event.number = :number", { number });

        if (city)
            eventQuery.andWhere("event.city = :city", { city });

        if (state)
            eventQuery.andWhere("event.state = :state", { state });

        
        const events = await eventQuery.getMany();
        return events;
    }

    async findById(id: number): Promise<Event> {
        return await this.repository.findOne(id);
    }

    async removeOneTicketAvailable(id: number): Promise<Event> {
        const event = await this.repository.findOne(id);
        event.tickets_available--;
        await this.repository.save(event);

        return event;
    }

}