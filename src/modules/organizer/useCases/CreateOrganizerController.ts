import { Request, response, Response } from "express";
import { container } from "tsyringe";
import { CreateOrganizerService } from "./CreateOrganizerService";

export class CreateOrganizerController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password} = req.body;
        const createOrganizerService = container.resolve(CreateOrganizerService);
        const organizer = await createOrganizerService.execute({ name, email, password});
        return res.json(organizer);
    }
}