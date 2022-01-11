import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Ticket } from "./Ticket";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    cpf: string;

    @Column()
    phone: string;

    @OneToMany(type => Ticket, ticket => ticket.user)
    @JoinColumn()
    tickets: Ticket[];
}