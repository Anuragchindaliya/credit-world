import * as dotenv from "dotenv";
import Applicant from "../models/AppliantModel.js";
dotenv.config();
import Subs from "../models/SubsModel.js";
import Applier from "../models/ApplierModel.js";
import Bank from "../models/BankModel.js";
import Engage from "../models/EngageModel.js";
import Request from "../models/RequestModel.js";
import Card from "../models/CardModel.js";

export const getDashboardDetails = async (req, res, next) => {
  try {
    const { query } = req;
    // const filter = Object.keys(query).reduce((sql, key, i) => {
    //   const join = i ? " AND " : "";
    //   sql += `${join}${key}='${query[key]}'`;
    //   return sql;
    // }, "");
    const subscriber = await Subs.getCount();
    const applicant = await Applicant.getCount();
    const applier = await Applier.getCount();
    const bank = await Bank.getCount();
    const engage = await Engage.getCount();
    const request = await Request.getCount();
    const card = await Card.getCount();
    const recent = await Applicant.getRecent();

    const salesMade = await Applicant.execute(`SELECT COUNT(*) as saleCount
    FROM applicants
    WHERE MONTH(createdAt) = MONTH(CURRENT_DATE())
    AND YEAR(createdAt) = YEAR(CURRENT_DATE())`);

    // select year(OrderDate),month(OrderDate),count(*)
    //  from Orders
    //  group by year(OrderDate),month(OrderDate)
    //  order by year(OrderDate),month(OrderDate);
    const yearlySalesMade =
      await Applicant.execute(`SELECT date_format(createdAt,'%b') AS month, COUNT(*) as sale
    FROM applicants
    WHERE YEAR(createdAt) = YEAR(CURRENT_DATE())
    GROUP BY month(createdAt) 
    ORDER BY MONTH(createdAt)
    `);

    res.json({
      message: "success",
      result: {
        yearlySalesMade: yearlySalesMade?.[0],
        subscriber: subscriber?.[0][0]["COUNT(*)"],
        applicant: applicant?.[0][0]["COUNT(*)"],
        applier: applier?.[0][0]["COUNT(*)"],
        bank: bank?.[0][0]["COUNT(*)"],
        engage: engage?.[0][0]["COUNT(*)"],
        request: request?.[0][0]["COUNT(*)"],
        card: card?.[0][0]["COUNT(*)"],
        recentApplicant: recent[0],
        monthSale: salesMade?.[0][0].saleCount,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
