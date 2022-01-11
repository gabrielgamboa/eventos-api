import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../../database/repositories/implementations/UsersRepository";
import { AppError } from "../errors/AppError";


interface ITokenPayload {
    id: number;
}

export async function ensureAuthenticated (request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { id: user_id } = verify(token, "d5c6d7e0392032715f66cbd14e085594") as ITokenPayload;

        const usersRepository = new UsersRepository();
        const user = await usersRepository.findById(user_id);

        if(!user) {
            throw new AppError("User does not exists", 401);
        }

        request.user = user;

        return next();

    } catch (error) {
        throw new AppError("Invalid token", 401);
    }

}