export interface ITokenGenerator {
  createSendToken(user: string): Promise<string>;
  verifySendToken(token: string): Promise<void>;
}
