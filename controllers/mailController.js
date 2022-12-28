import * as dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
export const sendMail = async (mailFormat) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const configTran = {
    // host: "smtp.gmail.com",
    host: "smtpout.secureserver.net",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
  };
  try {
    let transporter = nodemailer.createTransport(configTran);

    // send mail with defined transport object
    //   const mailFormat = {
    //     from: `"Credit World Agent" <${process.env.MAIL}>`, // sender address
    //     // to: "anuragwebpoint@gmail.com", // list of receivers
    //     to,
    //     subject: `creditworld.in ${subject}`, // Subject line
    //     // text: "Hello world? test mail", // plain text body
    //     html: body, // html body
    //   };
    const info = await transporter.sendMail(mailFormat);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    return info;
  } catch (err) {
    return err;
  }
};
