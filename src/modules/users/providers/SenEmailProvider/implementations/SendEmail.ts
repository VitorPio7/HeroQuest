import transport from "@config/emailNodeMailer";

import { IEmailProvider } from "../models/IEmailProvider";

class Email implements IEmailProvider {
  public async sentEmail(
    to: string,
    firstName: string,
    url: string,
    from: string
  ): Promise<void> {}
}
