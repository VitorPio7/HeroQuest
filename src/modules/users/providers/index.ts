import { container } from "tsyringe";

import BcryptHashProvider from "./HashProvider/implementations/BcryptHashProvider";

import { IHashProvider } from "./HashProvider/models/IHashProvider";
import { IEmailProvider } from "./SenEmailProvider/models/IEmailProvider";
import SendEmail from "./SenEmailProvider/implementations/SendEmail";
import TokenGeneratorProvider from "@shared/providers/implementations/TokenGeneratorProvider";
import { ITokenGenerator } from "@shared/providers/models/ITokenGenerator";

container.registerSingleton<IHashProvider>("HashProvider", BcryptHashProvider);

container.registerSingleton<IEmailProvider>("EmailProvider", SendEmail);

container.registerSingleton<ITokenGenerator>("TokenGeneratorProvider", TokenGeneratorProvider);