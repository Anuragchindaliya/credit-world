import { Router } from "express";
import {
  createApplier,
  exportCsv,
  getAllAppliers,
} from "../controllers/applierController.js";
const applierRoute = Router();

// @route GET && POST - /banks/
applierRoute.route("/").get(getAllAppliers).post(createApplier);
applierRoute.route("/export").get(exportCsv);
// applierRoute.route("/:id").get(getBankById);

export default applierRoute;
