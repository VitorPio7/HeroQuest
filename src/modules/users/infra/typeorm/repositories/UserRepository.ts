import { IUserRepository } from "@modules/users/domain/repositories/IUserRepository";
import { Repository } from "typeorm";
import User from "../entities/User";
import { dataSource } from "@shared/infra/typeorm/data-source";
import { IUserCreate } from "@modules/users/domain/models/IUserCreate";
import { IUser } from "@modules/users/domain/models/IUser";

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = dataSource.getRepository(User);
  }

  public async create({ name, email, password }: IUserCreate): Promise<User> {
    const user = this.ormRepository.create({ name, email, password });

    await this.ormRepository.save(user);

    return user;
  }
  public async save(user:User):Promise<User> {
    await this.ormRepository.save(user);

    return user
  }
  public async findByEmail(email: string): Promise<IUser | null> {
     const user = await this.ormRepository.findOneBy({
      email
     })
     return user;
  }
}

export default UserRepository;
