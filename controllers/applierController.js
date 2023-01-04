import * as dotenv from "dotenv";
import { Parser } from "json2csv";
import Applier from "../models/ApplierModel.js";
dotenv.config();
import { sendMail } from "./mailController.js";
export const createApplier = async (req, res, next) => {
  const { name, contact, email, pincode, salary, ITR, cardUser, body, bankId } =
    req.body;
  if (!name || !contact || !email || !bankId) {
    return res.json({ message: "all fields are required" });
  }
  const bodyHtml =
    body ||
    `<div>
    <h1>Credit World</h1>
    <p>Thanks for applying</p>
    </div>`;
  // <div>Sender Mail: ${email}</div>
  const applier = new Applier({
    name,
    contact,
    email,
    pincode,
    salary,
    ITR,
    cardUser,
    body,
    bankId,
  });
  let messageRes = "";
  try {
    const applierResult = await applier.save();
    if (applierResult?.[0]?.affectedRows) {
      messageRes += "Successfully";
    } else {
      throw new Error("sql error: ", applierResult);
    }
    // return res.json({ ...subResult?.[0] });

    // send mail with defined transport object
    const mailFormat = {
      from: `"Creditworld" <${process.env.MAIL}>`, // sender address
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
    const { query } = req;
    const filter = Object.keys(query).reduce((sql, key, i) => {
      const join = i ? " AND " : "";
      sql += `${join}${key}='${query[key]}'`;
      return sql;
    }, "");
    const result = await Applier.findAllJOIN(filter);
    const fields = [
      { label: "ID", value: "id" },
      { label: "Name", value: "name" },
      { label: "Contact", value: "contact" },
      { label: "Pincode", value: "pincode" },
      { label: "Card User", value: "cardUser" },
      { label: "Salary", value: "salary" },
      { label: "ITR", value: "ITR" },
      { label: "Bank", value: "bankName" },
      { label: "Email", value: "email" },
      { label: "Created At", value: "createdAt" },
    ];
    const opts = { fields };
    const parser = new Parser(opts);
    const csv = parser.parse(result[0]);
    res.attachment(`applier_${Date.now()}.csv`);
    res.send(csv);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const getAllAppliers = async (req, res, next) => {
  try {
    const { query } = req;
    const filter = Object.keys(query).reduce((sql, key, i) => {
      const join = i ? " AND " : "";
      sql += `${join}${key}='${query[key]}'`;
      return sql;
    }, "");
    const result = await Applier.findAllJOIN(filter);
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
