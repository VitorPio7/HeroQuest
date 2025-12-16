import { container } from "tsyringe";

import "@modules/users/providers";

import { IUserRepository } from "@modules/users/domain/repositories/IUserRepository";

container.registerSingleton<IUserRepository>(
    'UserRepository',
    UserRe
)