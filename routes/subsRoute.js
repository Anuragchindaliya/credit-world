import { Router } from "express";
import { exportCsv, saveSubs } from "../controllers/subsController.js";
const router = Router();

// @route GET && POST - /mail/
router.route("/").post(saveSubs);

router.route("/export").get(exportCsv)

export default router;
