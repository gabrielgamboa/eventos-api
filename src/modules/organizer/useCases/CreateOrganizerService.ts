import { inject, injectable } from "tsyringe";
import { Organizer } from "../../../database/entities/Organizer";
import { IOrganizersRepository } from "../../../database/repositories/IOrganizersRepository";
import { AppError } from "../../../shared/errors/AppError";
import { ICreateOrganizer } from "../dtos/ICreateOrganizer";

@injectable()
export class CreateOrganizerService {
    constructor(
        @inject("OrganizersRepository")
        private organizersRepository: IOrganizersRepository
    ) { }

    async execute({ name, email, password }: ICreateOrganizer): Promise<Organizer> {
        const organizerAlreadyExists = await this.organizersRepository.findByEmail(email);

        if (organizerAlreadyExists) {
            throw new AppError("User already exists!");
        }

        const organizer = await this.organizersRepository.create({ name, email, password });
        return organizer;
    }
}