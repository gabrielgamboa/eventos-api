import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { OrganizersRepository } from "../../database/repositories/implementations/OrganizersRepository";
import { AppError } from "../errors/AppError";


interface ITokenPayload {
    id: number;
}

export async function ensureOrganizer (request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { id: organizer_id } = verify(token, process.env.SECRET_KEY) as ITokenPayload;

        const organizersRepository = new OrganizersRepository();
        const organizer = await organizersRepository.findById(organizer_id);

        if(!organizer) {
            throw new AppError("Organizer does not exists", 401);
        }

        request.organizer = organizer;

        return next();

    } catch (error) {
        throw new AppError("Invalid token", 401);
    }

}