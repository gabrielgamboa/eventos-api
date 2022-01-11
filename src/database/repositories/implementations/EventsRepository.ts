import { getRepository, Repository } from "typeorm";
import { ICreateEventDTO } from "../../../modules/event/dtos/ICreateEventDTO";
import { IEventsRepository } from "../IEventsRepository";
import { Event } from "../../entities/Event";

export class EventsRepository implements IEventsRepository {
    private repository: Repository<Event>;

    constructor() {
        this.repository = getRepository(Event);
    }

    async create({title, description, street, number, city, state, date, ticket_price, tickets_available, organizer_id, event_type_id}: ICreateEventDTO): Promise<Event> {
        const event = this.repository.create({
            title, 
            description, 
            street, 
            number, 
            city, 
            state,
            date,
            tickets_available,
            ticket_price,
            organizer_id,
            event_type_id
        });

        await this.repository.save(event);

        return event;
    }
    async list(): Promise<Event[]> {
        return await this.repository.find();
    }

}