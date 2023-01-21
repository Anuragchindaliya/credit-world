import { Router } from "express";
import {
  createApplicant,
  exportCsv,
  getAllApplicants,
} from "../controllers/applicantController.js";
import { verifyJWT } from "../middlewares/verityJWT.js";
const applicantRoute = Router();

// @route GET && POST - /banks/
applicantRoute.route("/").get(verifyJWT,getAllApplicants).post(createApplicant);
applicantRoute.route("/export").get(exportCsv);
// applicantRoute.route("/:id").get(getBankById);

export default applicantRoute;
