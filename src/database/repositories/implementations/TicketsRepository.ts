import { getRepository, Repository } from "typeorm";
import { ICreateTicketDTO } from "../../../modules/event/dtos/ICreateTicketDTO";
import { Ticket } from "../../entities/Ticket";
import { ITicketsRepository } from "../ITicketsRepository";

export class TicketsRepository implements ITicketsRepository {
    private repository: Repository<Ticket>;

    constructor() {
        this.repository = getRepository(Ticket);
    }
    
    async create({ price, user_id, event_id }: ICreateTicketDTO): Promise<Ticket> {
        const ticket = this.repository.create({
            price,
            purchase_date: new Date(),
            user_id,
            event_id
        });

        await this.repository.save(ticket);

        return ticket;
    }

    async list(id: number): Promise<Ticket[]> {
        return await this.repository.createQueryBuilder("t")
            .select(["t.id", "t.purchase_date", "t.price", "t.user_id"])
            .innerJoinAndSelect("t.event", "e")
            .where("t.user_id = :id", { id })
            .getMany();
    }

}