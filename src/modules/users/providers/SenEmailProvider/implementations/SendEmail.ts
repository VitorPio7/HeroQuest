import transport from "@config/emailNodeMailer";

import { IEmailProvider } from "../models/IEmailProvider";

import EmailText from "./EmailText";
class SendEmail implements IEmailProvider {
  public async sentEmail(
    to: string,
    firstName: string,
    url: string,
    from: string,
    subject: string,
    textEmail: string,
    link: string
  ): Promise<void> {
    const html = new EmailText().emailText(subject, textEmail, link);
    const info = await transport.sendMail({
      from: `${process.env.NAME} < ${process.env.EMAIL_HOST_DEV}>`,
      to,
      subject,
      html,
    });
  }
}

export default SendEmail;
