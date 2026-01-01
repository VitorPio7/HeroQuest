export interface IConfirmEmailRepository {
  confirmEmail(token: string): Promise<void>;
}
