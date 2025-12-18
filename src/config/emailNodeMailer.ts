import nodemailer from "nodemailer";

// async function getEmailConfig() {
//   return await nodemailer.createTestAccount();
// }

// const transport = nodemailer.createTransport({
//   host: getEmailConfig.smtp.host,
//   port: testAccount.smtp.port,
//   auth: {
//     user: testAccount.user,
//     pass: testAccount.pass,
//   },
// } as nodemailer.TransportOptions);

// export default transport;

async function getEmailConfig() {
  const testAccount = await nodemailer.createTestAccount();

  const transport = nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  } as nodemailer.TransportOptions);
  return transport;
}

export default getEmailConfig;
