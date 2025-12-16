import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import { IUserCreate } from "../domain/models/IUserCreate";
import { IUser } from "../domain/models/IUser";
import AppError from "@shared/errors/AppError";

@injectable()
class CreateUserService {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ) {}

  public async execute({ name, email, password }: IUserCreate): Promise<IUser> {
    const emailExists = await this.usersRepository.findByEmail(email);
    if (emailExists) {
      return new AppError("This email already exist", 409);
    }
  }
}
