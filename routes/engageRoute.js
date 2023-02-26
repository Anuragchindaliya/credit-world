import { Router } from "express";
import {
  createEngage,
  exportCsv,
  getAllEngage,
} from "../controllers/engageController.js";
import { verifyJWT } from "../middlewares/verityJWT.js";
const engageRoute = Router();

// @route GET && POST - /banks/
engageRoute.route("/").get(verifyJWT, getAllEngage).post(createEngage);
engageRoute.route("/export").get(exportCsv);
// engageRoute.route("/:id").get(getBankById);

export default engageRoute;
