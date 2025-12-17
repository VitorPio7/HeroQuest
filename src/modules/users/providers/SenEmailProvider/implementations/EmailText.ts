import { IEmailText } from "../models/IEmailText";

class EmailText implements IEmailText {
  public async emailText(
    subject: string,
    text: string,
    link: string
  ): Promise<string> {
    return ` 
               <h1>${subject}</h1>
               <p>${text}</p>
               ${
                 link
                   ? `<p>Please, click on the link bellow to continue:</p>
               <a href:"${link}" target="_blank" >Confirm the action</a>
               <br>
               <p>If you cant click, copy and past this URL in the browser:</p>
               <p>${link}</p>
               `
                   : ``
               }
            `;
  }
}

export default EmailText;
