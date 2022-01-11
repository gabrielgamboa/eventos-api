import { ICreateEventDTO } from "../../modules/event/dtos/ICreateEventDTO";
import { Event } from "../entities/Event";

export interface IEventsRepository {
    create(data: ICreateEventDTO): Promise<Event>;
    list(street?: string, number?: string, city?: string, state?: string ): Promise<Event[]>;
    findById(id: number): Promise<Event>;
    removeOneTicketAvailable(id: number): Promise<Event>;
}