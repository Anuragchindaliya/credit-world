import { Router } from "express";
import { createApplicant, getAllApplicants } from "../controllers/applicantController.js";
const applicantRoute = Router();

// @route GET && POST - /banks/
applicantRoute.route("/")
// .get(getAllApplicants)
.post(createApplicant);

// applicantRoute.route("/:id").get(getBankById);

export default applicantRoute;
