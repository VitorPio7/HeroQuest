import transport from "@config/emailNodeMailer";

import { IEmailProvider } from "../models/IEmailProvider";

import EmailText from "./EmailText";
class sendEmail implements IEmailProvider {
  public async sentEmail(
    to: string,
    firstName: string,
    url: string,
    from: string,
    subject: string,
    text: string,
    link: string
  ): Promise<void> {
    const sendEmail = new EmailText().emailText("Confirm password");
  }
}

export default sendEmail;
