import { Router } from "express";
import { saveSubs } from "../controllers/subsController.js";
const router = Router();

// @route GET && POST - /mail/
router.route("/").post(saveSubs);

export default router;
