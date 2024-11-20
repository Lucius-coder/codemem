import express from "express";
import {Router} from "express";
import createDeck from "../controllers/decks/createDeck.js";
import protectRoute from "../middleware/ProtectRoute.js";
import readDeck from "../controllers/decks/readDeck.js";
const router = Router();

router.post("/create",protectRoute, createDeck)
router.post("/read",protectRoute, readDeck)
export default router;