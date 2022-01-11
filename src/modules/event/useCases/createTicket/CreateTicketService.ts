import { inject, injectable } from "tsyringe";
import { Ticket } from "../../../../database/entities/Ticket";
import { IEventsRepository } from "../../../../database/repositories/IEventsRepository";
import { ITicketsRepository } from "../../../../database/repositories/ITicketsRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateTicketDTO } from "../../dtos/ICreateTicketDTO";

@injectable()
export class CreateTicketService {
    constructor(
        @inject("TicketsRepository")
        private ticketsRepository: ITicketsRepository,

        @inject("EventsRepository")
        private eventsRepository: IEventsRepository
    ) {}
    
    async execute({ user_id, event_id }: ICreateTicketDTO ): Promise<Ticket> {
        const event = await this.eventsRepository.findById(event_id);

        if (!event.tickets_available)
            throw new AppError("No tickets available for this event!");

        const { ticket_price } = event;
        
        const ticket = await this.ticketsRepository.create({ user_id, event_id, price: ticket_price});
        await this.eventsRepository.removeOneTicketAvailable(event_id);

        return ticket;
    }
}