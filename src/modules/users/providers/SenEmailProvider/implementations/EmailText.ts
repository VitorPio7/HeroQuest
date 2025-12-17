import { IEmailText } from "../models/IEmailText";

class EmailText implements IEmailText {
  public emailTextSent(subject: string, text: string, link: string): string {
    return `
      <h1>${subject}</h1>
      <p>${text}</p>
      <a href="${link}">Acessar</a>
    `;
  }
}

export default EmailText;
