import { container } from "tsyringe";

import BcryptHashProvider from "./HashProvider/implementations/BcryptHashProvider";

import { IHashProvider } from "./HashProvider/models/IHashProvider";
import { IEmailProvider } from "./SenEmailProvider/models/IEmailProvider";
import SendEmail from "./SenEmailProvider/implementations/SendEmail";

container.registerSingleton<IHashProvider>("HashProvider", BcryptHashProvider);
container.registerSingleton<IEmailProvider>("EmailProvider", SendEmail);
