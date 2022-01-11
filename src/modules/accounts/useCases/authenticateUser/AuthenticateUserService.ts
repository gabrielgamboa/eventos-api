import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "../../../../database/repositories/IUsersRepository";
import { AppError } from "../../../../shared/errors/AppError";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
export class AuthenticateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user)
            throw new AppError("E-mail or password is incorrect!", 401);

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch)
            throw new AppError("E-mail or password is incorrect!", 401);

            const token = sign({ id: user.id }, "d5c6d7e0392032715f66cbd14e085594", {
                expiresIn: "7d"
            });
    
            const tokenReturn: IResponse = {
                user: {
                    name: user.name,
                    email: user.email
                },
                token,
            }
    
            return tokenReturn;
    }
}