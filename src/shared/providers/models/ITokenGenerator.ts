export interface ITokenGenerator {
  createSendToken(user: string): Promise<string>;
}