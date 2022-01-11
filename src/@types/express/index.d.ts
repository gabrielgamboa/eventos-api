declare namespace Express {
    export interface Request {
        user: User;
        organizer: Organizer;
    }
}