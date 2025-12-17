export interface IEmailText {
  emailText(
    subject: string,
    text: string,
    link: string,
    
  ): Promise<string>;
}
