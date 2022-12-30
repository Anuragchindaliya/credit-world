import { Router } from "express";
import {
  exportCsv,
  getAllSubs,
  saveSubs,
} from "../controllers/subsController.js";
const router = Router();

// @route GET && POST - /mail/
router.route("/").post(saveSubs).get(getAllSubs);

router.route("/export").get(exportCsv);

export default router;
