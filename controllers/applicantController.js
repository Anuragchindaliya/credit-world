import * as dotenv from "dotenv";
import { Parser } from "json2csv";
import Applicant from "../models/AppliantModel.js";
dotenv.config();
import { sendMail } from "./mailController.js";
export const createApplicant = async (req, res, next) => {
  const { name, contact, email, pincode, salary, ITR, cardUser, body } =
    req.body;
  const bodyHtml =
    body ||
    `<div>
    <h1>Credit World</h1>
    <p>Thanks for applying</p>
    </div>`;
  // <div>Sender Mail: ${email}</div>
  const applicant = new Applicant({
    name,
    contact,
    email,
    pincode,
    salary,
    ITR,
    cardUser,
    body,
  });
  let messageRes = "";
  try {
    const applicantResult = await applicant.save();
    if (applicantResult?.[0]?.affectedRows) {
      messageRes += "Successfully";
    } else {
      throw new Error("sql error: ", applicantResult);
    }
    // return res.json({ ...subResult?.[0] });

    // send mail with defined transport object
    const mailFormat = {
      from: `"Credit World Agent" <${process.env.MAIL}>`, // sender address
      to: email,
      subject: `Credit card applied`, // Subject line
      html: bodyHtml, // html body
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
    const result = await Applicant.findAllJOIN();
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
export const getAllApplicants = async (req, res, next) => {
  try {
    const result = await Applicant.findAll();
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
