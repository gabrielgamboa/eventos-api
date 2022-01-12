import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../../modules/accounts/dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, email, password, cpf, phone }: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({
            name,
            email,
            password,
            cpf,
            phone,
        }); 

        await this.repository.save(user);

        return user;
    }
    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne({ email });
    }
    async findById(id: number): Promise<User> {
        return await this.repository.findOne(id);
    }

    async updateUser(user: User): Promise<User> {
        return await this.repository.save(user);
    }

}