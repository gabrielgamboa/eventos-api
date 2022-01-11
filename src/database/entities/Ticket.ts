import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "./Event";
import { User } from "./User";


@Entity("tickets")
export class Ticket {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    purchase_date: Date;

    @Column()
    price: number;

    @ManyToOne(type => Event, event => event.tickets)
    @JoinColumn({ name: "user_id" })
    event: Event;

    @ManyToOne(type => User, user => user.tickets)
    @JoinColumn({ name: "event_id" })
    user: User;

    @Column()
    user_id: number;

    @Column()
    event_id: number;
}