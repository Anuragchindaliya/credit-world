import { Router } from "express";
import {
  createNewCard,
  getAllCards,
  getCardById,
} from "../controllers/cardController.js";
const router = Router();

// @route GET && POST - /posts/
router.route("/").get(getAllCards).post(createNewCard);

router.route("/:id").get(getCardById);

export default router;
