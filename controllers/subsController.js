import * as dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import Subs from "../models/SubsModel.js";
import { sendMail } from "./mailController.js";
export const saveSubs = async (req, res) => {
  // name, contact, email, subject, body, cardId
  const { name, contact, email, subject, body, cardId } = req.body;
  const sub = new Subs(name, contact, email, subject, body, cardId);
  const subResult = await sub.save();
  //   return res.json({ ...subResult?.[0] });


  // send mail with defined transport object
  const mailFormat = {
    from: `"Credit World Agent" <${process.env.MAIL}>`, // sender address
    to:email,
    subject: `creditworld.in ${subject}`, // Subject line
    html: body, // html body
  };
  const info = await sendMail(mailFormat)
  
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  if (info.rejected.length) {
    return res.json({ message: "Subscribe Error" });
  }
  res.json({ message: "Subscribed" });
};
