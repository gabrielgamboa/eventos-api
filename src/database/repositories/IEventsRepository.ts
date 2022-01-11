import { ICreateEventDTO } from "../../modules/event/dtos/ICreateEventDTO";
import { Event } from "../entities/Event";

export interface IEventsRepository {
    create(data: ICreateEventDTO): Promise<Event>;
    list(): Promise<Event[]>;
}