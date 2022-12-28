import * as dotenv from "dotenv";
dotenv.config();
import Subs from "../models/SubsModel.js";
import { sendMail } from "./mailController.js";
export const saveSubs = async (req, res, next) => {
  // name, contact, email, subject, body, cardId
  const {
    name,
    contact,
    email,
    subject,
    body,
    message,
    cardId,
    cardName,
    pincode,
    salary,
    ITR,
    crLimitMin,
    crLimitMax,
  } = req.body;
  const bodyHtml =
    body ||
    `<div>
    <h1>Credit World</h1>
    <p>Thanks for applying</p>
    <div>Card Name: ${cardName}</div>
    <div>Sender Mail: ${email}</div>
    <div>Message: ${message}</div>
  </div>`;
  const sub = new Subs({
    name,
    contact,
    email,
    subject,
    bodyHtml,
    message,
    cardId,
    pincode,
    salary,
    ITR,
    crLimitMin,
    crLimitMax,
  });
  let messageRes = "";
  try {
    const subResult = await sub.save();
    if (subResult?.[0]?.affectedRows) {
      messageRes += "Susbcribe";
    }else{
      throw new Error("sql error: ",subResult)
    }
    // return res.json({ ...subResult?.[0] });

    // send mail with defined transport object
    const mailFormat = {
      from: `"Credit World Agent" <${process.env.MAIL}>`, // sender address
      to: email,
      subject: `creditworld.in ${subject}`, // Subject line
      html: body, // html body
    };
    const info = await sendMail(mailFormat);
    // console.log({info});
    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    if (info?.rejected?.length) {
      return res.json({ message: "Subscribe Error" });
    } else {
      messageRes += " message sent";
    }
  } catch (error) {
    console.log(error);
    next(error);
  }

  res.json({ messageRes, bodyHtml });
};
