import * as dotenv from "dotenv";
import { Parser } from "json2csv";
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
    cardUser,
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
    cardUser,
  });
  let messageRes = "";
  try {
    const subResult = await sub.save();
    if (subResult?.[0]?.affectedRows) {
      messageRes += "Successfully";
    } else {
      throw new Error("sql error: ", subResult);
    }
    // return res.json({ ...subResult?.[0] });

    // send mail with defined transport object
    const mailFormat = {
      from: `"Credit World Agent" <${process.env.MAIL}>`, // sender address
      to: email,
      subject: `Credit card applied`, // Subject line
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
      messageRes += " subscribed";
    }
  } catch (error) {
    console.log(error);
    next(error);
  }

  res.json({ messageRes, bodyHtml });
};
export const exportCsv = async (req, res, next) => {
  try {
    const result = await Subs.findAllJOIN();
    const fields = [
      { label: "ID", value: "subId" },
      { label: "Name", value: "name" },
      { label: "Contact", value: "contact" },
      { label: "Pincode", value: "pincode" },
      { label: "Card User", value: "cardUser" },
      { label: "Salary", value: "salary" },
      { label: "ITR", value: "itr" },
      { label: "Requested Card", value: "cardName" },
      { label: "Email", value: "email" },
      { label: "Created At", value: "createdAt" },
    ];
    const opts = { fields };
    const parser = new Parser(opts);
    const csv = parser.parse(result[0]);
    res.attachment(`credit_${Date.now()}.csv`);
    res.send(csv);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const getAllSubs = async (req, res, next) => {
  try {
    const result = await Subs.findAll();
    res.json({
      message: "success",
      count: result?.[0]?.length || 0,
      result: result?.[0],
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
