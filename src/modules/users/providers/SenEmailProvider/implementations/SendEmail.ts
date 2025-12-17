import transport from "@config/emailNodeMailer";

import { IEmailProvider } from "../models/IEmailProvider";

import EmailText from "./EmailText";
import SMTPTransport from "nodemailer/lib/smtp-transport";
class SendEmail implements IEmailProvider {
  public async sendEmail(
    to: string,
    firstName: string,
    url: string,
    from: string,
    subject: string,
    textEmail: string,
    link: string
  ): Promise<SMTPTransport.SentMessageInfo> {
    const html = new EmailText().emailTextSent(subject, textEmail, link);
    const info = await transport.sendMail({
      from: `${process.env.NAME} < ${process.env.EMAIL_HOST_DEV}>`,
      to,
      subject,
      html,
    });
    return info
  }
}

export default SendEmail;
