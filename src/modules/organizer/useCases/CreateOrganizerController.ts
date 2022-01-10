import { Request, Response } from "express";

export class CreateOrganizerController {
    async handle(req: Request, res: Response): Promise<Response> {
        return res.json();
    }
}