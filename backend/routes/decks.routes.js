import express from "express";
import {Router} from "express";
import createDeck from "../controllers/decks/createDeck.js";
import protectRoute from "../middleware/ProtectRoute.js";
const router = Router();

router.post("/create",protectRoute, createDeck)
export default router;