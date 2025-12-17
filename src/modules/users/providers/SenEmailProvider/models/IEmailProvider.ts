export interface IEmailProvider {
  sendEmail(
    to: string,
    firstName: string,
    url: string,
    from: string
  ): Promise<void>;
}
