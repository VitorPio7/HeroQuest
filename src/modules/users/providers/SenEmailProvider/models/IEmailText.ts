export interface IEmailText {
  emailTextSent(subject: string, text: string, link: string): string;
}
