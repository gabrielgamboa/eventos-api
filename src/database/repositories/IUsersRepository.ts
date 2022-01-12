import { User } from "../entities/User";
import { ICreateUserDTO } from "../../modules/accounts/dtos/ICreateUserDTO";

export interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findById(id: number): Promise<User>;
    updateUser(user: User): Promise<User>;
}