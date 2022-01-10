import { getRepository, Repository } from "typeorm";
import { ICreateOrganizer } from "../../../modules/organizer/dtos/ICreateOrganizer";
import { Organizer } from "../../entities/Organizer";
import { IOrganizersRepository } from "../IOrganizersRepository";

export class OrganizersRepository implements IOrganizersRepository {
    private repository: Repository<Organizer>;

    constructor() {
        this.repository = getRepository(Organizer);
    }

    async create({ name, email, password }: ICreateOrganizer): Promise<Organizer> {
        const organizer = this.repository.create({
            name,
            email,
            password,
        }); 

        await this.repository.save(organizer);

        return organizer;
    }
    async findByEmail(email: string): Promise<Organizer> {
        return await this.repository.findOne({ email });
    }
    async findById(id: number): Promise<Organizer> {
        return await this.repository.findOne(id);
    }


}