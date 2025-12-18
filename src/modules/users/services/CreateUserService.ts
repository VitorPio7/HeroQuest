import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../domain/repositories/IUserRepository";

import { IUserCreate } from "../domain/models/IUserCreate";

import { IUser } from "../domain/models/IUser";

import AppError from "@shared/errors/AppError";

import { IHashProvider } from "../providers/HashProvider/models/IHashProvider";

import { IEmailProvider } from "../providers/SenEmailProvider/models/IEmailProvider";

import { ITokenGenerator } from "@shared/providers/models/ITokenGenerator";

@injectable()
class CreateUserService {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider,
    @inject("EmailProvider")
    private emailProvider: IEmailProvider,
    @inject("TokenGeneratorProvider")
    private tokenGeneratorProvider: ITokenGenerator
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

    const createToken = await this.tokenGeneratorProvider.createSendToken(
      user.id
    );
    user.tokenActiveAccount = createToken;

    await this.usersRepository.save(user);

    const url = `http://localhost:3000/${createToken}`;

    await this.emailProvider.sendEmail(email, name, url);

    return user;
  }
}
