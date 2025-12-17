import nodemailer from "nodemailer";

import type SMTPTransport from "nodemailer/lib/smtp-transport";

const configNodemailer: SMTPTransport.Options = {
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
};

const transport = nodemailer.createTransport(configNodemailer);

export default transport;
