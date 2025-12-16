import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import { IUserCreate } from "../domain/models/IUserCreate";
import { IUser } from "../domain/models/IUser";
import AppError from "@shared/errors/AppError";
import BcryptHashProvider from "../providers/HashProvider/implementations/BcryptHashProvider";
import { IHashProvider } from "../providers/HashProvider/models/IHashProvider";
@injectable()
class CreateUserService {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({ name, email, password }: IUserCreate): Promise<IUser> {
    const emailExists = await this.usersRepository.findByEmail(email);
    if (emailExists) {
      throw new AppError("This email already exist", 409);
    }
    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    return user;
  }
}
