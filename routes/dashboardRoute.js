import { Router } from "express";
import { verifyJWT } from "../middlewares/verityJWT.js";
import { getDashboardDetails } from "../controllers/dashboardController.js";
const dashboardRoute = Router();

dashboardRoute.route("/").get(verifyJWT, getDashboardDetails);

export default dashboardRoute;
