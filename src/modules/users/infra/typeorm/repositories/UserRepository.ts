import { IUserRepository } from "@modules/users/domain/repositories/IUserRepository";
import { Repository } from "typeorm";
import User from "../entities/User";
import { dataSource } from "@shared/infra/typeorm/data-source";

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = dataSource.getRepository(User);
  }
}

export default UserRepository;
