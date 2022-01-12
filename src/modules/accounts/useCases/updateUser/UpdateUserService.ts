import { inject, injectable } from "tsyringe";
import { User } from "../../../../database/entities/User";
import { IUsersRepository } from "../../../../database/repositories/IUsersRepository";

interface IRequest {
    id: number;
    name?: string;
    email?: string;
    phone?: string;
}

@injectable()
export class UpdateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ id, name, email, phone }: IRequest): Promise<User> {
        const user = await this.usersRepository.findById(id);

        if (name) user.name = name;
        if (email) user.email = email;
        if (phone) user.phone = phone;

        const updatedUser = await this.usersRepository.updateUser(user);
        
        return updatedUser;
    }
}