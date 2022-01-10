import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { IUsersRepository } from "../../../../database/repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../../../database/entities/User";
import { AppError } from "../../../../shared/errors/AppError";


@injectable()
export class CreateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
        ) {}

    async execute ({ name, email, password, cpf, phone }: ICreateUserDTO): Promise<User> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists)
            throw new AppError("User already exists!");

        const passwordHash = await hash(password, 8);

        const user = await this.usersRepository.create({ 
            name,
            email,
            password: passwordHash,
            cpf,
            phone 
        });

        return user;
    }
}