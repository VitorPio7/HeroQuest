import { authConfig } from "@config/authConfig";

import jwt, {SignOptions} from "jsonwebtoken";

import { ITokenPayload } from "../models/ITokenPayload";

import { ITokenGenerator } from "../models/ITokenGenerator";

class TokenGeneratorProvider implements ITokenGenerator {
  public async createSendToken(
    user: string,
  ): Promise<string> {
    const payload: ITokenPayload = {
      sub: user,
    };
    const token = jwt.sign(
      payload,
      authConfig.jwt.secret as jwt.Secret,
      { expiresIn: authConfig.jwt.expiresIn } as SignOptions,
    );
    return token;
  }
}

export default TokenGeneratorProvider;