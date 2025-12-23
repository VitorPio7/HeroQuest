import { v4 as uuidv4 } from "uuid";

import { IUserCreate } from "../../models/IUserCreate";

import { IUserRepository } from "../IUserRepository";

import User from "@modules/users/infra/typeorm/entities/User";
import { IUser } from "../../models/IUser";

class FakeUserRepository implements IUserRepository {
  private users: IUser[] = [];

  public async create({ name, email, password }: IUserCreate): Promise<User> {
    const user = new User();
    user.id = uuidv4();
    user.password = password;
    user.email = email;
    user.name = name;

    this.users.push(user);

    return user;
  }
  public async findByEmail(email: string): Promise<IUser | null> {
    const findEmail = this.users.findIndex(
      (findEmail) => findEmail.email === email
    );
    const emailUser = this.users[findEmail];

    return emailUser;
  }
  public async save(user: IUser): Promise<IUser> {
    const findIndex = this.users.findIndex(
      (findUser) => findUser.id === user.id
    );

    this.users[findIndex] = user;
    return user;
  }
}
