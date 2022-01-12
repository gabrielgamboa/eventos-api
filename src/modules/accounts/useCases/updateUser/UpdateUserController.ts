import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserService } from "./UpdateUserService";

export class UpdateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, phone } = req.body;
        const { id } = req.user;
        const updateUserService = container.resolve(UpdateUserService);
        const updatedUser = await updateUserService.execute({id, name, email, phone});
        return res.json(updatedUser);
    }
}