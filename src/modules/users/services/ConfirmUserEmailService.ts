import { ITokenGenerator } from "@shared/providers/models/ITokenGenerator";
import { inject, injectable } from "tsyringe";

@injectable()
class ConfirmUserEmailService {
  constructor(
    @inject("TokenGeneratorProvider")
    private tokenGeneratorProvider: ITokenGenerator
  ) {}
  async execute(token: string): Promise<void> {
    // Logic to confirm user email
    await this.tokenGeneratorProvider.verifySendToken(token);

    return;
  }
}

export default ConfirmUserEmailService;
