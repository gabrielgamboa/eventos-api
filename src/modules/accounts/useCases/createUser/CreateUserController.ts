import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "./CreateUserService";
import { createUserSchema } from "../../../../shared/validators";

export class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password, cpf, phone } = req.body;

        const result = createUserSchema.validate(req.body, {
            abortEarly: false
        });

        const createUserService = container.resolve(CreateUserService);
        const createdUser = await createUserService.execute({ name, email, password, cpf, phone });

        return res.status(201).json(createdUser);
    }
}