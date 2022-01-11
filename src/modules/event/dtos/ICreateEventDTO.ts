export interface ICreateEventDTO {
    title: string;
    description?: string;
    date: Date;
    street: string;
    number: string;
    city: string;
    state: string;
    ticket_price: number;
    tickets_available: number;
    organizer_id: number;
    event_type_id: number;
}
