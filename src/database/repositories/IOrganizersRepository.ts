import { ICreateOrganizer } from "../../modules/organizer/dtos/ICreateOrganizer";
import { Organizer } from "../entities/Organizer";

export interface IOrganizersRepository {
    create(data: ICreateOrganizer): Promise<Organizer>;
    findByEmail(email: string): Promise<Organizer>;
    findById(id: number): Promise<Organizer>;
}