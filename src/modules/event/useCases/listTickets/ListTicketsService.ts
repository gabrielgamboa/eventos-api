import { inject, injectable } from "tsyringe";
import { Ticket } from "../../../../database/entities/Ticket";
import { ITicketsRepository } from "../../../../database/repositories/ITicketsRepository";

@injectable()
export class ListTicketsService {
    constructor(
        @inject("TicketsRepository")
        private ticketsRepository: ITicketsRepository
    ) {}

    async execute(user_id: number): Promise<Ticket[]> {
        const tickets = await this.ticketsRepository.list(user_id);
        return tickets;
    }
}