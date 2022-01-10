import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("organizers")
export class Organizer {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}