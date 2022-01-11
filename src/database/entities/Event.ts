import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ticket } from "./Ticket";

@Entity("events")
export class Event {
    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    title: string;

    @Column()
    description?: string;

    @Column()
    date: Date;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    ticket_price: number;

    @Column()
    tickets_available: number;

    @OneToMany(type => Ticket, ticket => ticket.event)
    @JoinColumn()
    tickets?: Ticket[];

    @Column()
    event_type_id: number;

    @Column()
    organizer_id: number;

}