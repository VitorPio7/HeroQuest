export interface IEmailProvider {
  sendEmail(
    to: string,
    firstName: string,
    url: string,
    from: string,
    subject: string,
    textEmail: string,
    link: string,
  ): Promise<void>;
}
