import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserService } from "./AuthenticateUserService";

export class AuthenticateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password, type } = req.body;

        const authenticateUserService = container.resolve(AuthenticateUserService);
        const token = await authenticateUserService.execute({email, password, type});

        return res.json(token);
    }
}