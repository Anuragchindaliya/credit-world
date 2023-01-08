import { Router } from "express";
import {
  exportCsv,
  getAllSubs,
  saveSubs,
} from "../controllers/subsController.js";
import { verifyJWT } from "../middlewares/verityJWT.js";
const router = Router();

// @route GET && POST - /mail/
router.route("/").post(saveSubs).get(verifyJWT,getAllSubs);

router.route("/export").get(exportCsv);

export default router;
