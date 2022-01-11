import { PrimaryGeneratedColumn } from "typeorm";

export interface ICreateTicketDTO {
    price?: number;
    user_id: number;
    event_id: number;
}