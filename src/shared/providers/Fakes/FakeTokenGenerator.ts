import { ITokenGenerator } from "../models/ITokenGenerator";

class FakeTokenGenerator implements ITokenGenerator {
  public async createSendToken(user: string): Promise<string> {
    return user;
  }
}

export default FakeTokenGenerator;
