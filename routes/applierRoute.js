import { Router } from "express";
import {
  createApplier,
  exportCsv,
  getAllAppliers,
} from "../controllers/applierController.js";
import { verifyJWT } from "../middlewares/verityJWT.js";
const applierRoute = Router();

// @route GET && POST - /banks/
applierRoute.route("/").get(verifyJWT, getAllAppliers).post(createApplier);
applierRoute.route("/export").get(exportCsv);
// applierRoute.route("/:id").get(getBankById);

export default applierRoute;
