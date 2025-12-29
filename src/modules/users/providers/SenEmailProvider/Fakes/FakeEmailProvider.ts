import SMTPTransport, { SentMessageInfo } from "nodemailer/lib/smtp-transport";
import { IEmailProvider } from "../models/IEmailProvider";

class FakeEmailProvider implements IEmailProvider {
  public async sendEmail(
    to: string,
    firstName: string,
    url: string,
    from: string,
    subject: string,
    textEmail: string,
    link: string
  ): Promise<SMTPTransport.SentMessageInfo> {
    return {} as SMTPTransport.SentMessageInfo;
  }
}

export default FakeEmailProvider;
