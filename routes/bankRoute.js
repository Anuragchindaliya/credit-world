import { Router } from "express";
import { createNewBank, getAllBanks, getBankById } from "../controllers/bankController.js";
const bankRoute = Router();

// @route GET && POST - /banks/
bankRoute
  .route("/")
  .get(getAllBanks)
  .post(createNewBank);

bankRoute.route("/:id").get(getBankById);

export default bankRoute;
