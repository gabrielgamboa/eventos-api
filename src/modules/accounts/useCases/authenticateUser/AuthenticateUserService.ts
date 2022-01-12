import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "../../../../database/repositories/IUsersRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { IOrganizersRepository } from "../../../../database/repositories/IOrganizersRepository";

interface IRequest {
    email: string;
    password: string;
    type: string;
}

@injectable()
export class AuthenticateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,

        @inject("OrganizersRepository")
        private organizersRepository: IOrganizersRepository
    ) { }

    async execute({ email, password, type }: IRequest): Promise<string> {
        const repository = type === "USER" ? this.usersRepository : this.organizersRepository;

        const user = await repository.findByEmail(email);

        if (!user)
            throw new AppError("E-mail or password is incorrect!", 401);

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch)
            throw new AppError("E-mail or password is incorrect!", 401);

        const token = sign({ id: user.id, name: user.name, email: user.email, type }, "d5c6d7e0392032715f66cbd14e085594", {
            expiresIn: "7d"
        });

        return token;

    }

}