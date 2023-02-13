import { Router } from "express";
import { createRequest, exportCsv, getAllRequest } from "../controllers/requestController.js";
import { verifyJWT } from "../middlewares/verityJWT.js";
const requestRoute = Router();

// @route GET && POST - /banks/
requestRoute.route("/").get(
  verifyJWT,
  getAllRequest).post(createRequest);
requestRoute.route("/export").get(exportCsv);
// requestRoute.route("/:id").get(getBankById);

export default requestRoute;
